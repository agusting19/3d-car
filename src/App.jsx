import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CarShow from "./components/CarShow";
import "./index.css";

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
