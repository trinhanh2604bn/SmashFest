import * as T from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { makeTableFitPreview } from './table-fit.js';
import './style.css';

const get = id => document.getElementById(id);
const viewport = get('viewport');
const loaderText = get('loader');
const play = get('play');
const scrub = get('scrub');
const reset = get('reset');
const clock = get('clock');
const download = get('download');
const assetButtons = [...document.querySelectorAll('[data-asset]')];
const fitButtons = [...document.querySelectorAll('[data-fit]')];
const clipButtons = [...document.querySelectorAll('[data-clip]')];
const viewButtons = [...document.querySelectorAll('[data-view]')];
const views = {
  orbit: [4.15, 3.1, 5],
  rear: [0, 2.55, -5.8],
  side: [5.8, 2.3, 0],
  top: [0, 6.4, .22],
  game: [0, 2.02, 5.85],
};
const assets = {
  cannon: {
    file: 'lam-kim.glb', type: 'PHÁO LỄ HỘI', title: 'Lam Kim',
    description: 'Men lam vát cạnh, vòng đồng và đế xoay đa giác.',
    target: [0, .88, .09], distance: 1, platform: 1,
  },
  table: {
    file: 'ban-lam-kim.glb', type: 'BÀN KÊ MỤC TIÊU', title: 'Bàn Lam Kim',
    description: 'Mặt men mật ong, cạnh xanh cobalt nạm đồng và chân trụ đa giác.',
    target: [0, .72, 0], distance: 1.27, platform: 1.45,
  },
  beach: {
    file: 'vinh-nang.glb', type: 'BỐI CẢNH BỜ BIỂN', title: 'Vịnh Nắng',
    description: 'Bãi cát sáng, biển xanh ngọc và hàng cọ ở hai bên. Khoảng giữa dành cho bàn và pháo Lam Kim.',
    target: [0, 1.78, 0], distance: 1.7, platform: 1, environment: true,
  },
};
const seconds = new Intl.NumberFormat('vi', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

async function start() {
  const renderer = new T.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = T.PCFShadowMap;
  renderer.toneMapping = T.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.22;
  viewport.append(renderer.domElement);

  const scene = new T.Scene();
  const studioBackground = new T.Color('#273541');
  const studioFog = new T.FogExp2('#273541', .075);
  scene.background = studioBackground;
  scene.fog = studioFog;
  const studio = new RoomEnvironment();
  const pmrem = new T.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(studio, .04).texture;
  scene.environmentIntensity = .75;
  studio.dispose();
  pmrem.dispose();
  const camera = new T.PerspectiveCamera(39, 1, .1, 65);
  const controls = new OrbitControls(camera, viewport);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.minDistance = 2.9;
  controls.maxDistance = 12.5;
  controls.maxPolarAngle = Math.PI * .51;
  controls.listenToKeyEvents(viewport);

  const light = new T.DirectionalLight('#ffddb0', 3);
  light.position.set(-3, 5.5, 3.2);
  light.castShadow = true;
  light.shadow.mapSize.set(1024, 1024);
  Object.assign(light.shadow.camera, { left: -3.4, right: 3.4, top: 3.4, bottom: -3.4 });
  light.shadow.normalBias = .017;
  scene.add(light);
  const rim = new T.DirectionalLight('#8dc5ff', 2.15);
  rim.position.set(4, 2.3, -4);
  scene.add(rim);
  const floor = new T.Mesh(new T.PlaneGeometry(80, 80), new T.MeshStandardMaterial({ color: '#273541', roughness: .92 }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -.12;
  floor.receiveShadow = true;
  scene.add(floor);
  const plinth = new T.Mesh(new T.CylinderGeometry(1.79, 1.86, .115, 80), new T.MeshStandardMaterial({ color: '#405261', roughness: .72 }));
  plinth.position.y = -.058;
  plinth.receiveShadow = true;
  scene.add(plinth);
  const line = new T.Mesh(new T.RingGeometry(1.61, 1.623, 96), new T.MeshBasicMaterial({ color: '#a5abb2' }));
  line.rotation.x = -Math.PI / 2;
  line.position.y = .002;
  scene.add(line);
  const context = new T.Group();
  scene.add(context);

  let activeAsset = assets.cannon;
  let activeView = 'orbit';
  function chooseView(name) {
    activeView = name;
    controls.target.set(...activeAsset.target);
    camera.position.set(...views[name]);
    const distance = name === 'game' ? 1 : activeAsset.distance * (camera.aspect < .83 ? 1.16 : 1);
    camera.position.sub(controls.target).multiplyScalar(distance).add(controls.target);
    controls.update();
    updateLens();
    viewButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === name)));
  }
  viewButtons.forEach(button => button.addEventListener('click', () => chooseView(button.dataset.view)));

  function updateLens() {
    camera.fov = activeView === 'game'
      ? T.MathUtils.radToDeg(2 * Math.max(Math.PI / 9, Math.atan(.49 / camera.aspect)))
      : camera.aspect < .83 ? 48 : 39;
    camera.updateProjectionMatrix();
  }
  function resize() {
    const { clientWidth, clientHeight } = viewport;
    const width = Math.max(1, clientWidth);
    const height = Math.max(1, clientHeight);
    camera.aspect = width / height;
    updateLens();
    renderer.setSize(width, height, false);
  }
  resize();
  chooseView('orbit');
  new ResizeObserver(resize).observe(viewport);

  const loader = new GLTFLoader();
  const loaded = new Map();
  const playbackControls = [play, reset, scrub, ...clipButtons];
  let selectedRequest = 0;
  let model;
  let tableFitPreview;
  let fitChoice = 'wide';
  let animations = [];
  let mixer;
  let action;
  let duration = 0;
  let elapsed = 0;
  let playing = false;

  function seek(time) {
    elapsed = T.MathUtils.clamp(time, 0, duration);
    action.time = elapsed;
    mixer.update(0);
    scrub.value = elapsed;
    clock.value = `${seconds.format(elapsed)} / ${seconds.format(duration)} giây`;
  }

  function setPlaying(value) {
    playing = value;
    play.textContent = playing ? 'Tạm dừng' : elapsed >= duration ? 'Phát lại' : 'Phát chuyển động';
  }

  function selectClip(index) {
    mixer.stopAllAction();
    const clip = animations[index];
    action = mixer.clipAction(clip).reset().play();
    action.paused = true;
    duration = clip.duration;
    scrub.max = duration;
    seek(0);
    setPlaying(false);
    clipButtons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  }

  clipButtons.forEach((button, i) => button.addEventListener('click', () => selectClip(i)));
  play.addEventListener('click', () => {
    if (playing) {
      setPlaying(false);
      return;
    }
    if (elapsed >= duration) seek(0);
    setPlaying(true);
  });
  scrub.addEventListener('input', () => {
    seek(scrub.valueAsNumber);
    setPlaying(false);
  });
  reset.addEventListener('click', () => {
    seek(0);
    setPlaying(false);
  });
  function showFit(key) {
    fitChoice = key;
    const { width, depth } = tableFitPreview(key);
    get('fit-size').value = `${seconds.format(width)} × ${seconds.format(depth)} đv`;
    fitButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.fit === key)));
  }
  fitButtons.forEach(button => button.addEventListener('click', () => showFit(button.dataset.fit)));

  function getAsset(key) {
    if (!loaded.has(key)) {
      const request = loader.loadAsync(`./models/${assets[key].file}`)
        .then(data => key === 'beach' ? data : { ...data, contextTemplate: data.scene.clone(true) })
        .catch(error => {
          loaded.delete(key);
          throw error;
        });
      loaded.set(key, request);
    }
    return loaded.get(key);
  }

  async function showBeachContext(request) {
    const [cannon, table] = await Promise.all([getAsset('cannon'), getAsset('table')]);
    if (request !== selectedRequest) return;
    const cannonView = cannon.contextTemplate.clone(true);
    cannonView.scale.setScalar(.62);
    cannonView.position.set(0, 0, 4.4);
    cannonView.rotation.y = Math.PI;
    const tableView = table.contextTemplate.clone(true);
    tableView.scale.setScalar(.92);
    tableView.position.z = -.42;
    for (const prop of [cannonView, tableView]) {
      prop.traverse(object => { if (object.isMesh) object.castShadow = true; });
      context.add(prop);
    }
  }

  async function selectAsset(key) {
    const request = ++selectedRequest;
    const asset = assets[key];
    activeAsset = asset;
    get('table-fit').hidden = true;
    assetButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.asset === key)));
    get('asset-type').textContent = asset.type;
    get('asset-title').textContent = asset.title;
    get('asset-description').textContent = asset.description;
    const path = `./models/${asset.file}`;
    download.href = path;
    download.download = asset.file;
    const url = new URL(location.href);
    if (key !== 'cannon') url.searchParams.set('asset', key);
    else url.searchParams.delete('asset');
    history.replaceState(null, '', url);

    setPlaying(false);
    if (model) {
      mixer.stopAllAction();
      mixer.uncacheRoot(model);
      scene.remove(model);
      model = null;
    }
    playbackControls.forEach(control => { control.disabled = true; });
    scrub.value = 0;
    clock.value = '0,00 giây';
    loaderText.hidden = false;
    loaderText.textContent = 'Đang tải mô hình…';
    context.clear();
    const environment = Boolean(asset.environment);
    scene.background = environment ? new T.Color('#78c8f9') : studioBackground;
    scene.fog = environment ? null : studioFog;
    renderer.toneMappingExposure = environment ? .97 : 1.22;
    light.position.set(-3, environment ? 9 : 5.5, 3.2);
    light.intensity = environment ? 2.55 : 3;
    const extent = environment ? 8.5 : 3.4;
    Object.assign(light.shadow.camera, { left: -extent, right: extent, top: extent, bottom: -extent });
    light.shadow.camera.updateProjectionMatrix();
    camera.far = environment ? 125 : 65;
    for (const object of [floor, plinth, line]) object.visible = !environment;
    viewButtons.forEach(button => {
      button.hidden = button.dataset.view === 'game' ? !environment : environment && ['rear', 'side'].includes(button.dataset.view);
    });
    plinth.scale.set(asset.platform, 1, asset.platform);
    line.scale.setScalar(asset.platform);
    chooseView(environment ? 'game' : 'orbit');
    try {
      const data = await getAsset(key);
      if (request !== selectedRequest) return;
      model = data.scene;
      animations = data.animations;
      model.traverse(object => {
        if (object.isMesh) {
          object.castShadow = !environment || /Palm|Coastal|Stone|Shell|SeaStar/.test(object.name);
          object.receiveShadow = true;
          if (environment && object.material.isMeshBasicMaterial) object.material.toneMapped = false;
        }
      });
      scene.add(model);
      if (key === 'table') {
        tableFitPreview ??= makeTableFitPreview(model);
        showFit(fitChoice);
        get('table-fit').hidden = false;
      }
      mixer = new T.AnimationMixer(model);
      clipButtons.forEach((button, i) => { button.textContent = animations[i].name; });
      selectClip(0);
      playbackControls.forEach(control => { control.disabled = false; });
      loaderText.hidden = true;
      if (environment) showBeachContext(request).catch(console.error);
    } catch (error) {
      loaded.delete(key);
      if (request !== selectedRequest) return;
      loaderText.textContent = 'Không mở được mô hình 3D. Bạn vẫn có thể tải tệp GLB.';
      console.error(error);
    }
  }

  assetButtons.forEach(button => button.addEventListener('click', () => selectAsset(button.dataset.asset)));
  const requested = new URL(location.href).searchParams.get('asset');
  selectAsset(requested === 'table' || requested === 'beach' ? requested : 'cannon');

  let previous = performance.now();
  renderer.setAnimationLoop(now => {
    if (playing) {
      seek(elapsed + Math.min(.075, Math.max(0, (now - previous) / 1000)));
      if (elapsed >= duration) setPlaying(false);
    }
    previous = now;
    controls.update();
    renderer.render(scene, camera);
  });
}

start().catch(error => {
  loaderText.textContent = 'Không mở được mô hình 3D. Bạn vẫn có thể tải tệp GLB.';
  console.error(error);
});
