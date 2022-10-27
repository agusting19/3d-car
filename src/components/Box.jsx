import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Vector3 } from "three";

const resetPosition = () => {
  let vector = new Vector3(
    (Math.random() * 2 - 1) * 3,
    Math.random() * 2.5 + 0.1,
    (Math.random() * 2 - 1) * 15
  );

  if (vector.x < 0) vector.x -= 1.75;

  if (vector.x > 0) vector.x += 1.75;

  return vector;
};

const Box = ({ color }) => {
  const box = useRef();
  const [scale] = useState(() => Math.pow(Math.random(), 2.0) * 0.5 + 0.05);
  const [xRotationSpeed] = useState(() => Math.random());
  const [yRotationSpeed] = useState(() => Math.random());
  const [position, setPosition] = useState(resetPosition);

  useFrame(
    (state, delta) => {
      box.current.position.set(position.x, position.y, position.z);
      box.current.rotation.x += delta * xRotationSpeed;
      box.current.rotation.y += delta * yRotationSpeed;
    },
    [xRotationSpeed, yRotationSpeed, position]
  );

  return (
    <mesh ref={box} scale={scale} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} envMapIntensity={0.15} />
    </mesh>
  );
};

export default Box;
