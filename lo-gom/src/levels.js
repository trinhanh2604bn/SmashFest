import { impactLayouts } from '../../shared/impact/impact-layouts.js';

export const levels = [
  { name: 'Sân phơi gốm', shots: 2, stages: [{ layout: impactLayouts.single, cameraLayout: impactLayouts.tower }] },
  { name: impactLayouts.row.label, shots: 5, stages: [{
    layout: { ...impactLayouts.row, pieces: impactLayouts.row.pieces.map(([x, tier, z]) => [z, tier, -x]) },
    assetIndex: 1,
    cameraLayout: impactLayouts.tower,
  }] },
  { name: impactLayouts.tower.label, shots: 7, stages: [{ layout: impactLayouts.tower, assetIndex: 4 }] },
  { name: impactLayouts.cascade.label, shots: 7, stages: [{ layout: impactLayouts.cascade }] },
  { name: impactLayouts.pyramid.label, shots: 10, stages: [{ layout: impactLayouts.pyramid }] },
  { name: impactLayouts.bridge.label, shots: 8, stages: [{ layout: impactLayouts.bridge, motion: 'slide' }] },
  { name: impactLayouts.fortress.label, shots: 28, stages: [
    { layout: impactLayouts.fortress, motion: 'lift' },
    { layout: impactLayouts.cascade, motion: 'slide' },
  ] },
];
