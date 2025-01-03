import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, MeshTransmissionMaterial, ContactShadows, Environment,OrbitControls, Center, PresentationControls } from '@react-three/drei'
import { easing } from 'maath'
import { useStore } from './store'

import { Loaddress } from './model'

import {Backdrop } from './Components/Background'
import { colorstate } from './assets/colorconfig'

export default function App() {
  return (
    <Canvas eventSource={document.getElementById('root')} eventPrefix="client" camera={{ position: [0, 0, 2], fov: 40 }}>
      <ambientLight intensity={0.7} />
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
      <OrbitControls/>
      
      <Center>
      <Loaddress/>

      </Center>    
        
    </Canvas>
  )
}


function Cameracontroll(){
  <PresentationControls
  enabled={true} // the controls can be disabled by setting this to false
  global={false} // Spin globally or by dragging the model
  cursor={true} // Whether to toggle cursor style on drag
  snap={false} // Snap-back to center (can also be a spring config)
  speed={1} // Speed factor
  zoom={1} // Zoom factor when half the polar-max is reached
  rotation={[0, 0, 0]} // Default rotation
  polar={[0, Math.PI / 2]} // Vertical limits
  azimuth={[-Infinity, Infinity]} // Horizontal limits
  config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
 
>
  <mesh />
</PresentationControls>


}


useGLTF.preload('/nikeair.glb')