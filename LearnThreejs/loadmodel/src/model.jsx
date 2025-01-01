import { useGLTF, Float } from "@react-three/drei";

export function LoadModel(props) {
  // Load the GLTF model using useGLTF
  const { scene } = useGLTF("./apple.glb");

  return (
    <Float
      speed={2} // Animation speed
      rotationIntensity={1} // Rotation intensity
      floatIntensity={2} // Floating intensity
    >
      <primitive object={scene} scale={5} castShadow receiveShadow {...props} />
    </Float>
  );
}

// Preload the model for performance optimization
useGLTF.preload("./apple.glb");