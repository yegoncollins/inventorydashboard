import { Typography } from 'antd'
import React from 'react'

const Footer = () => {
  return (
    <div className='Footer'>
      <Typography.Link href='tel:+254712345678'>+254712345678</Typography.Link>
      <Typography.Link href='#' target={"_blank"}>Privacy Policy</Typography.Link>
      <Typography.Link href='#' target={"_blank"}>Terms & Conditions</Typography.Link>
    </div>
  )
}

export default Footer