import { useRef } from "react";

const Rings = () => {
  const itemsRef = useRef([]);

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
