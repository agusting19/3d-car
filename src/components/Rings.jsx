import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Rings = () => {
  const itemsRef = useRef([]);

  useFrame((state) => {
    for (let i = 0; i < itemsRef.current.length; i++) {
      let mesh = itemsRef.current[i];
      let z = (i - 7) * 3.5;

      mesh.position.set(0, 0, -z);
    }
  });

  return (
    <>
      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((ring, index) => {
        return (
          <mesh
            key={index}
            castShadow
            receiveShadow
            position={[0, 0, 0]}
            ref={(element) => (itemsRef.current[index] = element)}
          >
            <torusGeometry args={[3.35, 0.05, 16, 100]} />
            <meshStandardMaterial
              emissive={[0.5, 0.5, 0.5]}
              color={[0, 0, 0]}
            />
          </mesh>
        );
      })}
    </>
  );
};

export default Rings;
