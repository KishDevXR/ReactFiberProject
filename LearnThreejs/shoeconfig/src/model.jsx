import { Suspense, useRef } from 'react'
import{useGLTF} from "@react-three/drei"
import { Canvas, useFrame } from '@react-three/fiber'
import { useSnapshot } from 'valtio'
import {colorstate} from './assets/colorconfig'
import { easing } from 'maath'

export function Loaddress(props){

 const ref = useRef()
 const snap = useSnapshot(colorstate)
 useFrame((colors, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta))
  const { nodes, materials } = useGLTF('/dress.glb')
  return (
    <group ref={ref}>
     <mesh castShadow geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1} material-roughness={1} {...props} dispose={null}>
    </mesh>
    </group>
  )


}
// Preload the model for performance optimization
useGLTF.preload("./dress.glb");
