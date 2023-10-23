import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Vector3, BufferGeometry, BufferAttribute, TextureLoader } from "three";

const MyModel = ({ imageval }) => {
  const texture = useLoader(TextureLoader, imageval);
  const geometry = new BufferGeometry();
  const vertices = [
    new Vector3(-1, -1, 0),
    new Vector3(1, -1, 0),
    new Vector3(1, 1, 0),
    new Vector3(-1, 1, 0)
  ];
  const positions = new Float32Array(vertices.length * 3);

  for (let i = 0; i < vertices.length; i++) {
    positions[i * 3] = vertices[i].x;
    positions[i * 3 + 1] = vertices[i].y;
    positions[i * 3 + 2] = vertices[i].z;
  }

  geometry.setAttribute("position", new BufferAttribute(positions, 3));

  return (
    <mesh>
      <planeGeometry attach="geometry" args={[2, 2]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};

function ARView({ imageval }) {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <MyModel imageval={imageval} />

      <OrbitControls />
    </Canvas>
  );
}

export default ARView;