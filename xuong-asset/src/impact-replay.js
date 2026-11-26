const names = {
  shot: 'Bay đạn',
  hit: 'Trúng đạn',
  damage: 'Đổi GLB',
  tip: 'Nghiêng / mất đỡ',
  neighbor: 'Đụng vật khác',
  transfer: 'Hư hại do va chạm',
  fall: 'Đang rơi',
  ground: 'Chạm sàn',
  shatter: 'Vỡ khi chạm sàn',
  roll: 'Lăn / trượt',
  fade: 'Mờ dần',
  clear: 'Biến mất',
};
const formatTime = value => `${value.toFixed(2).replace('.', ',')} giây`;

export function createImpactReplay({ showFrame, returnToLive }) {
  const get = id => document.getElementById(id);
  const range = get('trace-time');
  const play = get('trace-play');
  const live = get('trace-live');
  const list = get('trace-events');
  const status = get('trace-status');
  const detail = get('trace-detail');
  const clock = get('trace-clock');
  let frames = [];
  let events = new Map();
  let started = null;
  let review = false;
  let playing = false;
  let cursor = 0;
  let quietSince = null;
  let eventPending = false;

  function leave() {
    if (review) returnToLive();
    review = playing = false;
    play.textContent = 'Phát lại';
    live.disabled = true;
    for (const { button } of events.values()) button.setAttribute('aria-pressed', 'false');
  }

  function clear() {
    leave();
    started = null;
    frames = [];
    events = new Map();
    cursor = 0;
    quietSince = null;
    eventPending = false;
    list.replaceChildren();
    detail.textContent = '';
    clock.value = formatTime(0);
    range.value = 0;
    range.disabled = play.disabled = true;
    status.textContent = 'Bắn một phát để ghi lại diễn biến trong mô phỏng.';
  }

  function seek(second, selected) {
    const duration = frames.at(-1).time;
    cursor = Math.min(duration, Math.max(0, second));
    const index = frames.findIndex(frame => frame.time > cursor);
    const next = index > 0 ? frames[index] : frames.at(-1);
    const previous = index > 0 ? frames[index - 1] : next;
    const mix = next === previous ? 0 : (cursor - previous.time) / (next.time - previous.time);
    review = true;
    showFrame(previous, next, mix);
    live.disabled = false;
    range.valueAsNumber = cursor;
    clock.value = formatTime(cursor);
    let current = selected;
    if (!current) for (const event of events.values()) if (event.time <= cursor + .001) current = event;
    for (const event of events.values()) event.button.setAttribute('aria-pressed', String(event === current));
    detail.textContent = current?.note ?? '';
  }

  function mark(key, time, note) {
    if (started === null || events.has(key)) return;
    const relative = Math.max(0, time - started);
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = `${names[key]} · ${formatTime(relative)}`;
    button.disabled = true;
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      playing = false;
      play.textContent = 'Phát lại';
      seek(relative, events.get(key));
    });
    const item = document.createElement('li');
    item.append(button);
    list.append(item);
    events.set(key, { time: relative, button, note });
    eventPending = true;
  }

  function finish() {
    started = null;
    range.max = frames.at(-1).time;
    range.step = 'any';
    range.disabled = play.disabled = false;
    for (const { button } of events.values()) button.disabled = false;
    status.textContent = 'Chọn một mốc hoặc kéo thanh tua để xem lại mô phỏng.';
  }

  range.addEventListener('input', () => {
    playing = false;
    play.textContent = 'Phát lại';
    seek(range.valueAsNumber);
  });
  play.addEventListener('click', () => {
    if (playing) {
      playing = false;
      play.textContent = 'Tiếp tục';
      return;
    }
    if (!review || cursor >= frames.at(-1).time) seek(0);
    playing = true;
    play.textContent = 'Tạm dừng';
  });
  live.addEventListener('click', leave);
  clear();
  return {
    get reviewing() { return review; },
    get recording() { return started !== null; },
    has(key) { return events.has(key); },
    clear,
    leave,
    begin(time) {
      clear();
      started = time;
      status.textContent = 'Đang ghi các trạng thái của lượt bắn…';
      mark('shot', time, 'Đạn rời vị trí bắn và bay tới mục tiêu.');
    },
    mark,
    sample(time, snapshot, moving = true) {
      if (started === null) return;
      const elapsed = time - started;
      if (!eventPending && frames.length && elapsed < frames.at(-1).time + 1 / 60 - .0001) return;
      frames.push({ time: elapsed, ...snapshot() });
      eventPending = false;
      quietSince = moving ? null : quietSince ?? elapsed;
      if (elapsed >= 4.8 || (elapsed >= 1.1 && quietSince !== null && elapsed - quietSince >= .45)) finish();
    },
    update(delta) {
      if (!playing) return;
      seek(cursor + delta);
      if (cursor >= frames.at(-1).time) {
        playing = false;
        play.textContent = 'Phát lại';
      }
    },
  };
}
