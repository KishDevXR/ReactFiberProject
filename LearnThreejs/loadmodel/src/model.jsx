import { useGLTF, Float } from "@react-three/drei";

export function LoadModel( {isFloating, ...props}) {
  // Load the GLTF model using useGLTF
  const { scene } = useGLTF("./nikeair.glb");

  return isFloating? (
    <Float
      speed={1} // Animation speed
      rotationIntensity={1} // Rotation intensity
      floatIntensity={2} // Floating intensity
    >
      <primitive object={scene} scale={2} castShadow receiveShadow {...props} />
    </Float>
  ) : (

    <primitive object={scene} scale={2} castShadow receiveShadow {...props} />
  );
}

// Preload the model for performance optimization
useGLTF.preload("./apple.glb");