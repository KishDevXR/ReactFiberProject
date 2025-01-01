import"./index.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls,PresentationControls,ContactShadows  } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";


import{LoadModel} from "./model"



export default function App() {
  return (
    <div className="App">
      <Canvas shadows camera={{position:[0,0,2],fov:50}}>
      <ambientLight intensity={0.5} />
      <directionalLight
          intensity={1}
          position={[5, 5, 5]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Suspense fallback={Loading}>
          <LoadModel />
          <OrbitControls />
          <Environment preset="city" background blur={1} />
          <ContactShadows
            position={[0, -0.8, 0]}
            opacity={0.5}
            scale={10}
            blur={2}
            far={1}
          />
        </Suspense>
      </Canvas>
    </div>
  );

  function Loading() {
    return <div style={{ color: "white", textAlign: "center" }}>Loading...</div>;
}

}
