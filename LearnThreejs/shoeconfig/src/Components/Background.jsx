import React from 'react'
import { useRef } from 'react'
import { colorstate } from '../assets/colorconfig'
import { useGLTF, useTexture, AccumulativeShadows, RandomizedLight, Decal, Environment, Center } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { easing } from 'maath'

const Background = () => {
  return (
    <div>Background</div>
  )
}

export function Backdrop(){
    const shadows = useRef()
    useFrame((colorstate, delta) => easing.dampC(shadows.current.getMesh().material.color, colorstate.color, 0.25, delta))
    return (
      <AccumulativeShadows
        ref={shadows}
        temporal
        frames={60}
        alphaTest={0.85}
        scale={5}
        resolution={2048}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, -0.14]}>
        <RandomizedLight amount={4} radius={9} intensity={0.55 * Math.PI} ambient={0.25} position={[5, 5, -10]} />
        <RandomizedLight amount={4} radius={5} intensity={0.25 * Math.PI} ambient={0.55} position={[-5, 5, -9]} />
      </AccumulativeShadows>
    )


}

export default Background