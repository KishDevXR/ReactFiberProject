import React from 'react'
import { proxy } from 'valtio'

export const colorstate = proxy({
  colors: ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934'],
  color: '#EFBD4E'


})

const colorconfig = () => {
  return (
    <div>colorconfig</div>
  )
}



export default colorconfig