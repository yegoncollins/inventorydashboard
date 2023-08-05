import React from 'react'
import { Image } from 'antd'
import logo from "./assets/logo,png"


const header = () => {
  return (
    <div className='Header'>
      <Image width={40} src={logo}>
      </Image>
    </div>
  )
}

export default header