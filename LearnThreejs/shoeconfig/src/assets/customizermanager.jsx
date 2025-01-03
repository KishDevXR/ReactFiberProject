//

import React from 'react'

import { colorstate } from './colorconfig'
import { useSnapshot } from 'valtio'
import { motion, AnimatePresence } from 'framer-motion'

export const customizermanager = () => {
    <div>
    {/* This component might need some content or logic */}
  </div>
}

export function Overlay(){
    const snap = useSnapshot(colorstate)
    const transition = { type: 'spring', duration: 0.8 }
    const config = {
        initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
        animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
        exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } }
      }

    return(


        <div style={{ position: 'fixed', top: 800, left: -20, width: '100%', height: '100%' }}>
             <AnimatePresence>  
             <motion.section key="custom" {...config}>
        <Colorcustomizer/>
      </motion.section>


             </AnimatePresence>
        

      </div>



    )


}

function Colorcustomizer(){

const snap = useSnapshot(colorstate)

return( 

    <div className="colorcustomizer">
    <div className="color-option">
      {snap.colors.map((color) => (
        <div
          key={color}
          className="circle"
          style={{ background: color }}
          onClick={() => {
            // Ensure you are updating the state correctly using valtio
            colorstate.color = color;
          }}
        ></div>
      ))}
    </div>
  </div>
);
}

