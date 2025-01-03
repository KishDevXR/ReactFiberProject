import React from 'react'
import {useGLTF} from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export const Importmodel = () => {
  const gltf = useLoader(GLTFLoader, "./Sofa.glb");
  return (
    <>
      <primitive object={gltf.scene} scale={1} />
    </>
  );
};

// Preload the model for performance optimization
useGLTF.preload("./Sofa.glb");