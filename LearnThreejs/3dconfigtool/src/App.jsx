import React from 'react'
import { Canvas , useLoader } from '@react-three/fiber'
import { Environment, OrbitControls,PresentationControls,ContactShadows  } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

import {Importmodel } from './Components/ModelManager'



export default function App(){
  return (

    <div className= "App">
       <Canvas shadows camera={{position:[3,0,2],fov:50}}>

        <Importmodel/>
       <Environment preset="city" background blur={1} />
     

       <ambientLight intensity={0.5} />
       <OrbitControls />
       
       


       </Canvas>


    </div>


  )


}