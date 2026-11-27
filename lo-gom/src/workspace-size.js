export function enableWorkspaceSizing() {
  const workspace = document.querySelector('.workspace');
  const split = document.getElementById('split');
  const heightGrip = document.getElementById('height-grip');
  const game = document.querySelector('.game');
  const mobile = matchMedia('(max-width:720px)');
  const key = 'smashfest.workspace.v1';
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(key)) || {}; } catch {}
  let share = Number.isFinite(saved.share) ? saved.share : 55;
  const heights = { desktop: saved.desktop, mobile: saved.mobile };
  const clamp = (value, low, high) => Math.min(high, Math.max(low, value));
  const device = () => mobile.matches ? 'mobile' : 'desktop';

  function apply() {
    const available = Math.max(1, workspace.clientWidth - split.offsetWidth);
    const low = mobile.matches ? 30 : Math.ceil(285 / available * 100);
    const high = mobile.matches ? 70 : Math.floor((1 - 280 / available) * 100);
    const percent = clamp(share, low, high);
    workspace.style.setProperty('--editor-size', (available * percent / 100) + 'px');
    split.setAttribute('aria-valuemin', low);
    split.setAttribute('aria-valuemax', high);
    split.setAttribute('aria-valuenow', Math.round(percent));
    const height = heights[device()];
    if (Number.isFinite(height)) workspace.style.setProperty('--play-height', clamp(height, 330, 1400) + 'px');
    else workspace.style.removeProperty('--play-height');
    heightGrip.setAttribute('aria-valuenow', Math.round(game.getBoundingClientRect().height));
  }

  function save() {
    try { localStorage.setItem(key, JSON.stringify({share, ...heights})); } catch {}
  }

  function handle(grip, horizontal) {
    const coordinate = event => horizontal ? event.clientX : event.clientY;
    const value = () => horizontal ? Number(grip.getAttribute('aria-valuenow')) : game.getBoundingClientRect().height;
    function set(next) {
      if (horizontal) share = clamp(next, Number(split.getAttribute('aria-valuemin')), Number(split.getAttribute('aria-valuemax')));
      else heights[device()] = clamp(next, 330, 1400);
      apply();
    }
    let origin;
    grip.onpointerdown = event => {
      if (event.button !== 0 || !event.isPrimary) return;
      event.preventDefault();
      grip.focus({preventScroll:true});
      origin = {id: event.pointerId, at: coordinate(event), value: value(), scale: horizontal ? 100 / (workspace.clientWidth - split.offsetWidth) : 1};
      grip.setPointerCapture(event.pointerId);
    };
    const move = event => {
      if (origin?.id === event.pointerId) set(origin.value + (coordinate(event) - origin.at) * origin.scale);
    };
    const finish = event => {
      if (!origin || (event.pointerId !== undefined && event.pointerId !== origin.id)) return;
      origin = null;
      save();
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', finish);
    window.addEventListener('pointercancel', finish);
    window.addEventListener('blur', finish);
    grip.onkeydown = event => {
      const keys = horizontal ? ['ArrowLeft','ArrowRight'] : ['ArrowUp','ArrowDown'];
      if (!keys.includes(event.key)) return;
      event.preventDefault();
      set(value() + (event.key === keys[0] ? -1 : 1) * (horizontal ? 2 : 20));
      save();
    };
    grip.ondblclick = () => {
      if (horizontal) share = 55;
      else delete heights[device()];
      apply();
      save();
    };
  }
  handle(split, true);
  handle(heightGrip, false);
  window.addEventListener('resize', apply);
  let previousWidth;
  new ResizeObserver(([entry]) => {
    if (previousWidth !== entry.contentRect.width) {
      previousWidth = entry.contentRect.width;
      apply();
    }
  }).observe(workspace);
  apply();
}
