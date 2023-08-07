import React from 'react'
import Typography from 'antd/es/typography/Typography'
import { Space, Statistic} from 'antd'
import Card from 'antd/es/card/Card'
import { ShoppingCartOutlined } from '@ant-design/icons'

const Dashboard = () => {
  return (
    
    <div><Typography.Title level={4}>Dashboard</Typography.Title>
    
    <Space direction='horizontal'>
    
      <DashboardCard title={"Orders"} value={3467}/>
    
      <DashboardCard title={"Inventory"} value={369}/>
      <DashboardCard title={"Customers"} value={578}/>
      <DashboardCard title={"Gross Income"} value={34667}/>
    </Space>
    
    </div>
  )
}

function DashboardCard( {title, value}){
  return(
  <Card>
  <Space direction='horizontal'>
 <ShoppingCartOutlined/>
 <Statistic title={title} value={value}/>
 </Space>
</Card>
);
}

export default Dashboard