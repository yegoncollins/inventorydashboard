import React, { useState } from 'react'
import { Card, Space, Statistic, Table, Typography} from 'antd'
import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons'
import { useEffect } from 'react';
import { getOrders, getRevenue } from '../../../API/api.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  return (
    
    <Space size={20} direction='vertical'>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction='horizontal'>
      
      <DashboardCard icon={<ShoppingCartOutlined style={{color:"orangered",backgroundColor: "rgba(0,255,232,0.15",borderRadius: 20, fontSize: 24,padding: 8,}}/>} title={"Orders"} value={3467}/>
      <DashboardCard icon={<ShoppingOutlined style={{color:"orangered",backgroundColor: "rgba(0,255,0,0.15",borderRadius: 20, fontSize: 24,padding: 8,}}/>} title={"Inventory"} value={369}/>
      <DashboardCard icon={<UserOutlined style={{color:"orangered",backgroundColor: "rgba(0,0,255,0.15",borderRadius: 20, fontSize: 24,padding: 8,}}/>} title={"Customers"} value={578}/>
      <DashboardCard icon={<DollarCircleOutlined style={{color:"orangered",backgroundColor: "rgba(255,0,0,0.15",borderRadius: 20, fontSize: 24,padding: 8,}}/>} title={"Gross Income"} value={34667}/>
      </Space>
       <Space>
        <RecentOrders/>
        <DashboardChart/>
       </Space>
    
    </Space>
  );
}
function DashboardCard( {title, value, icon}){
  return(
  <Card>
  <Space direction='horizontal'>
   {icon}
 <Statistic title={title} value={value}/>
 </Space>
</Card>
);
}
function RecentOrders(){
  const[dataSource, setDataSource] = useState([])
  const[loading, setLoading] = useState(false)
  useEffect(()=> {
    setLoading(true)
    getOrders().then(res=>{
      setDataSource(res.products.splice(0,3));
      setLoading(false);
  })
  },[]
  )
  return (
    <>
    <Typography.Text>RecentOrders</Typography.Text>
    <Table
    columns={[
      {
          title: "Title",
          
          dataIndex:"title"
      },
      {
          title: "Quantity",
          
          dataIndex:"quantity"
      },
      {
        
          title: "Price",
         
          dataIndex:"discountedPrice"
      }, 
      ]}
      loading={loading}
      dataSource={dataSource}
      pagination={false}
    >
    </Table>
    </>
  );
  
}
function DashboardChart(){

   useEffect(()=> {
    getRevenue().then(
      res=>{
        const labels = res.carts.map(cart=>{
          return`User-${cart.userId}`
        });
        const data = res.carts.map(cart=>{
          return cart.discountedTotal;
        });
      }
    )
   }, []
   );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Order Revenue',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.random()*1000),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() =>  Math.random()*1000),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  return <Bar options={options} data={data} />;
  
};

export default Dashboard;