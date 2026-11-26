// Tuples contain x, tier, depth, and optionally an index into the asset catalog.
export const impactLayouts = {
  single: {
    label: 'Một vật',
    pieces: [[0, 0, 0]],
  },
  row: {
    label: 'Hàng domino',
    pieces: [[0, 0, 1.5], [0, 0, .5], [0, 0, -.5], [0, 0, -1.5]],
  },
  tower: {
    label: 'Tháp 4–3–2',
    depth: .8,
    pieces: [
      [-1.5, 0, 0], [-.5, 0, 0], [.5, 0, 0], [1.5, 0, 0],
      [-1, 1, 0], [0, 1, 0], [1, 1, 0],
      [-.5, 2, 0], [.5, 2, 0],
    ],
  },
  cascade: {
    label: 'Cột chịu lực',
    description: 'Hũ cam đỡ cột giữa. Hai cụm bên cạnh có điểm tựa riêng.',
    aim: 2,
    depth: .8,
    margin: .34,
    pieces: [
      [-1.5, 0, 0, 6], [-.5, 0, 0, 6], [.5, 0, 0, 0], [1.5, 0, 0, 6],
      [-1.5, 1, -.12, 1], [.5, 1, -.27, 2], [1.5, 1, -.22, 1],
      [.6, 2, -.2, 5],
    ],
  },
  pyramid: {
    label: 'Kim tự tháp xen kẽ',
    description: 'Các hàng hũ và thùng xen nhau. Mỗi vật phía trên chia tải lên hai vật ở hàng dưới.',
    aim: 7,
    pieces: [
      [-2, 0, 0, 6], [-1, 0, 0, 0], [0, 0, 0, 6], [1, 0, 0, 2], [2, 0, 0, 6],
      [-1.5, 1, 0, 1], [-.5, 1, 0, 6], [.5, 1, 0, 6], [1.5, 1, 0, 3],
      [-1, 2, 0, 6], [0, 2, 0, 4], [1, 2, 0, 6],
      [-.5, 3, 0, 2], [.5, 3, 0, 1],
      [0, 4, 0, 5],
    ],
  },
  bridge: {
    label: 'Hai trụ chung cầu',
    description: 'Thùng bắc ngang đặt trên cả hai trụ. Hũ trên cùng dùng chung điểm tựa đó.',
    aim: 1,
    pieces: [
      [-1.79, 0, 0, 1], [-.76, 0, 0, 6], [.76, 0, 0, 6], [1.79, 0, 0, 0],
      [-.76, 1, 0, 6], [.76, 1, 0, 6],
      [0, 2, 0, 6],
      [0, 3, 0, 5],
    ],
  },
  fortress: {
    label: 'Pháo đài rỗng',
    description: 'Bốn cạnh bao quanh khoảng trống. Các thùng góc đỡ nhiều hướng khác nhau.',
    aim: 8,
    pieces: [
      [-1.2, 0, 1.05, 6], [0, 0, 1.05, 0], [1.2, 0, 1.05, 6],
      [-1.2, 0, 0, 2], [1.2, 0, 0, 1],
      [-1.2, 0, -1.05, 6], [0, 0, -1.05, 4], [1.2, 0, -1.05, 6],
      [-1.2, 1, .525, 6], [1.2, 1, .525, 6],
      [-.6, 1, -1.05, 1], [.6, 1, -1.05, 3],
      [-1.2, 2, .5, 2], [1.2, 2, .5, 4], [0, 2, -1.05, 6],
    ],
  },
};
