import { levels } from './levels.js';

const get = id => document.getElementById(id);
const number = index => String(index + 1).padStart(2, '0');

function drawLayout(stage) {
  const pieces = stage.layout.pieces;
  const canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 228;
  const ctx = canvas.getContext('2d');
  ctx.scale(2, 2);
  const columns = pieces.map(([x,,z]) => x + z * .27);
  const front = Math.max(...pieces.map(([, , z]) => z));
  const left = Math.min(...columns);
  const right = Math.max(...columns);
  const size = Math.min(28, 144 / (right - left + 1), 76 / (1.45 + Math.max(...pieces.map(([,tier]) => tier))));
  const colors = ['#f7a14d','#6eb7fc','#ffe477','#e6a0e8','#fc8983','#fc8983','#cd935f'];
  const span = (right - left + 1.45) * size;
  ctx.fillStyle = '#69998c';
  ctx.fillRect(98, 88, 5, 14);
  ctx.fillRect(89, 101, 23, 3);
  ctx.fillStyle = '#a1c9b5';
  ctx.fillRect(100 - span / 2, 84, span, 4);
  for (const [x,tier,z,override] of [...pieces].sort((a,b) => a[2]-b[2] || a[1]-b[1])) {
    const kind = override ?? stage.assetIndex ?? 0;
    const px = 100 + (x + z*.27 - (left+right)/2) * size;
    const y = 84 - tier*size - (front-z)*size*.09;
    const h = size * (kind === 5 ? 1.38 : .96);
    ctx.fillStyle = colors[kind];
    ctx.beginPath();
    ctx.roundRect(px-size*.45,y-h,size*.9,h,kind===6 ? 1 : size*.19);
    ctx.fill();
    ctx.fillStyle = kind===6 ? '#956342' : '#ffdf8d';
    ctx.fillRect(px-size*.45,y-h,size*.9,size*.18);
  }
  get('diagram').replaceChildren(canvas);
}

export function createEditor(selectLevel) {
  const tabs = [...document.querySelectorAll('[data-panel]')];
  for (const tab of tabs) tab.onclick = () => {
    for (const other of tabs) {
      const active = tab === other;
      other.setAttribute('aria-pressed', String(active));
      get(other.dataset.panel).hidden = !active;
    }
  };
  get('level-count').textContent = String(levels.length).padStart(2,'0');
  const cards = levels.map((level,index) => {
    const card = document.createElement('button');
    const label = document.createElement('small');
    label.textContent = 'MÀN ' + number(index);
    const name = document.createElement('strong');
    name.textContent = level.name;
    const detail = document.createElement('span');
    detail.className = 'entry-detail';
    detail.textContent = level.shots + ' viên · ' + level.stages.length + ' chặng';
    card.append(label,name,detail);
    card.onclick = () => selectLevel(index);
    return card;
  });
  get('level-list').append(...cards);
  return {
    showStage(index,stageIndex) {
      const level = levels[index];
      const stage = level.stages[stageIndex];
      get('level-summary').textContent = stage.layout.pieces.length + ' mục tiêu · ' + level.shots + ' viên đạn cho cả màn';
      drawLayout(stage);
      cards.forEach((card,i) => card.setAttribute('aria-current', String(i===index)));
      get('advance').disabled = index === levels.length-1;
    },
    record(index,won,used,remaining,points) {
      const row = document.createElement('li');
      const name = document.createElement('strong');
      name.textContent = number(index) + ' · ' + levels[index].name;
      const detail = document.createElement('span');
      detail.className = 'entry-detail';
      detail.textContent = (won ? 'Thắng' : 'Hết đạn') + ' · ' + points + ' điểm · Đã bắn ' + used + ' viên · Còn ' + remaining + ' mục tiêu';
      row.append(name,detail);
      get('history-empty').hidden = true;
      get('attempts').prepend(row);
    },
  };
}
