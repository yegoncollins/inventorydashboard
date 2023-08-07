import React from 'react'
import {BellFilled, MailOutlined} from "@ant-design/icons"
import {Badge, Space, Typography } from 'antd'



const Header = () => {
  return (
    <div className='Header'>
      <Typography.Title> Inventory Dashboard</Typography.Title>
      <Space>
        <Badge count={10} dot>
        <MailOutlined style={{fontSize: 24}} />
        </Badge>
        <Badge count={20}>
        <BellFilled style={{fontSize: 24}} />
        </Badge>
      </Space>
    </div>
  )
}

export default Header