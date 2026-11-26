const clips = import.meta.glob('./sfx/*.mp3', { eager: true, import: 'default', query: '?url' });

const profiles = {
  muzzle: { duration: .14, pitch: 165, fall: .38, filter: 1050, tone: .12, noise: .13 },
  hit: { duration: .10, pitch: 720, fall: .56, filter: 2700, tone: .09, noise: .14, level: .60 },
  fracture: { duration: .18, pitch: 980, fall: .33, filter: 2300, tone: .07, noise: .20, level: .69 },
  neighbor: { duration: .075, pitch: 510, fall: .63, filter: 1800, tone: .055, noise: .08, level: .36 },
  ground: { duration: .15, pitch: 113, fall: .50, filter: 450, tone: .09, noise: .13, level: .50 },
  skitter: { duration: .08, pitch: 285, fall: .56, filter: 1100, tone: .018, noise: .05, level: .34 },
  win: { duration: .31, pitch: 520, fall: 850 / 520, tone: .16, wave: 'sine' },
  lose: { duration: .27, pitch: 270, fall: 112 / 270, tone: .15, wave: 'sine' },
};

const voiceLimit = 7;
const masterLevel = .86;

function clipName(kind, wood) {
  if (kind === 'hit' || kind === 'neighbor') return wood ? 'wood-hit' : 'ceramic-hit';
  if (kind === 'fracture') return wood ? 'wood-break' : 'ceramic-break';
  return kind;
}

export function createImpactAudio() {
  const downloads = Object.entries(clips).map(([path, url]) => [
    path.split('/').at(-1).replace('.mp3', ''),
    fetch(url).then(response => response.ok ? response.arrayBuffer() : null).catch(() => null),
  ]);
  const buffers = new Map();
  const voices = new Set();
  let audio;
  let noise;
  let output;
  let resumePending;
  let generation = 0;
  let muted = false;

  function unlock() {
    if (muted || !window.AudioContext) return;
    if (!audio) {
      audio = new AudioContext();
      output = audio.createGain();
      output.gain.value = masterLevel;
      const compressor = audio.createDynamicsCompressor();
      compressor.threshold.value = -16;
      compressor.knee.value = 10;
      compressor.ratio.value = 6;
      compressor.attack.value = .004;
      compressor.release.value = .14;
      output.connect(compressor).connect(audio.destination);
      noise = audio.createBuffer(1, Math.ceil(audio.sampleRate * .2), audio.sampleRate);
      const signal = noise.getChannelData(0);
      for (let i = 0; i < signal.length; i++) signal[i] = Math.random() * 2 - 1;
      for (const [name, bytes] of downloads) {
        bytes.then(data => data && audio.decodeAudioData(data))
          .then(buffer => { if (buffer) buffers.set(name, buffer); })
          .catch(() => {});
      }
    }
    if (audio.state !== 'running' && !resumePending) {
      resumePending = audio.resume().catch(() => {}).finally(() => { resumePending = null; });
    }
  }

  function route(input, x) {
    if (!audio.createStereoPanner) {
      input.connect(output);
      return;
    }
    const pan = audio.createStereoPanner();
    pan.pan.value = Math.max(-.55, Math.min(.55, x * .24));
    input.connect(pan).connect(output);
  }

  function start(sources, now) {
    voices.add(sources);
    sources[0].onended = () => { voices.delete(sources); };
    for (const source of sources) source.start(now);
  }

  function playSample(kind, entry, buffer, now) {
    const source = audio.createBufferSource();
    source.buffer = buffer;
    source.playbackRate.value = (entry.grounded ? .91 : 1) * (.96 + Math.random() * .08);
    const amplitude = audio.createGain();
    amplitude.gain.value = profiles[kind].level * entry.strength * (entry.grounded ? .82 : 1);
    source.connect(amplitude);
    route(amplitude, entry.x);
    start([source], now);
  }

  function playSynth(kind, { strength, wood, grounded, x }, now) {
    const voice = profiles[kind];
    const end = now + voice.duration;
    const ceramic = !wood && ['hit', 'neighbor', 'fracture'].includes(kind);
    const weight = grounded && kind === 'fracture' ? .65 : 1;
    const pitch = voice.pitch * (wood ? .56 : 1) * weight;
    const oscillator = audio.createOscillator();
    const tone = audio.createGain();
    oscillator.type = voice.wave ?? (ceramic ? 'sine' : 'triangle');
    oscillator.frequency.setValueAtTime(pitch, now);
    oscillator.frequency.exponentialRampToValueAtTime(pitch * voice.fall, end);
    tone.gain.setValueAtTime(.0001, now);
    tone.gain.exponentialRampToValueAtTime(Math.max(.0002, voice.tone * strength * weight), now + .005);
    tone.gain.exponentialRampToValueAtTime(.0001, end);
    oscillator.connect(tone);
    route(tone, x);
    if (!voice.noise) {
      start([oscillator], now);
      oscillator.stop(end);
      return;
    }

    const texture = audio.createBufferSource();
    texture.buffer = noise;
    const filter = audio.createBiquadFilter();
    filter.type = ceramic ? 'bandpass' : 'lowpass';
    filter.frequency.value = voice.filter * weight;
    const transient = audio.createGain();
    transient.gain.setValueAtTime(Math.max(.0002, voice.noise * strength * weight), now);
    transient.gain.exponentialRampToValueAtTime(.0001, end);
    texture.connect(filter).connect(transient);
    route(transient, x);
    start([oscillator, texture], now);
    oscillator.stop(end);
    texture.stop(end);
  }

  function playSound(kind, entry) {
    if (muted || audio?.state !== 'running' || voices.size >= voiceLimit) return;
    const buffer = buffers.get(clipName(kind, entry.wood));
    const now = audio.currentTime;
    if (buffer) playSample(kind, entry, buffer, now);
    else playSynth(kind, entry, now);
  }

  function clear() {
    generation++;
    for (const sources of voices) for (const source of sources) source.stop();
    voices.clear();
  }

  return {
    unlock,
    clear,
    get muted() { return muted; },
    toggle() {
      muted = !muted;
      if (muted) clear();
      else unlock();
      if (output) output.gain.setTargetAtTime(muted ? 0 : masterLevel, audio.currentTime, .015);
    },
    play(kind, entry) {
      if (muted || !audio) return;
      if (audio.state === 'running') {
        playSound(kind, entry);
        return;
      }
      const requestedAt = performance.now();
      const playback = generation;
      resumePending?.then(() => {
        if (generation === playback && performance.now() - requestedAt < 180) playSound(kind, entry);
      });
    },
  };
}
