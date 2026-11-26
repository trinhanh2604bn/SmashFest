import { Box3, CylinderGeometry, Group, Mesh, MeshStandardMaterial, Vector3 } from 'three';

const layouts = {
  narrow: [[-.35, 0, .52], [.35, 0, .82]],
  wide: [[-1.51, 0, .57], [-.9, 0, .87], [-.3, 0, .64], [.3, 0, 1.06], [.9, 0, .72], [1.51, 0, .54]],
  deep: [[-.64, .39, .54], [0, .39, .65], [.64, .39, .53],
    [-.64, -.39, .83], [0, -.39, 1.06], [.64, -.39, .79]],
  empty: [],
};
const bodyMesh = new CylinderGeometry(.27, .28, 1, 12);
const capMesh = new CylinderGeometry(.278, .278, .06, 12);
const finishes = ['#3767cf', '#336ca4', '#4c7ced'].map(color => new MeshStandardMaterial({ color, roughness: .34 }));
const capFinish = new MeshStandardMaterial({ color: '#efc179', metalness: .45, roughness: .36 });
const edgeMargin = .11;
const minimumSize = .9;

export function makeTableFitPreview(model) {
  const top = model.getObjectByName('TableTop');
  const deck = model.getObjectByName('TableDeck');
  const surface = model.getObjectByName('TableSurface');
  const details = model.getObjectByName('TableDetails');
  if (!top || !deck || !surface || !details) throw new Error('Missing table fitting nodes');
  surface.geometry.computeBoundingBox();
  const dimensions = surface.geometry.boundingBox.getSize(new Vector3());
  const surfaceY = surface.position.y + surface.geometry.boundingBox.max.y;
  const decorationAnchors = details.children.map(mesh => [mesh, mesh.position.x, mesh.position.z]);
  const samples = new Group();

  return key => {
    samples.removeFromParent();
    samples.clear();
    layouts[key].forEach(([x, z, height], index) => {
      const piece = new Group();
      piece.position.set(x, surfaceY, z);
      const body = new Mesh(bodyMesh, finishes[index % finishes.length]);
      body.scale.y = height;
      body.position.y = height / 2;
      const cap = new Mesh(capMesh, capFinish);
      cap.position.y = height - .005;
      body.castShadow = cap.castShadow = true;
      piece.add(body, cap);
      samples.add(piece);
    });

    const footprint = new Box3().setFromObject(samples).getSize(new Vector3());
    const width = samples.children.length ? Math.max(minimumSize, footprint.x + 2 * edgeMargin) : dimensions.x;
    const depth = samples.children.length ? Math.max(minimumSize, footprint.z + 2 * edgeMargin) : dimensions.z;
    const scaleX = width / dimensions.x;
    const scaleZ = depth / dimensions.z;
    deck.scale.set(scaleX, 1, scaleZ);
    for (const [mesh, x, z] of decorationAnchors) {
      mesh.position.x = x * scaleX;
      mesh.position.z = z * scaleZ;
    }
    top.add(samples);
    return { width, depth };
  };
}
