import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from "../Pages/Dashboard/Dashboard.js"
import Inventory from '../Pages/Inventory/Inventory.js'
import Orders from '../Pages/Orders/Orders.js'
import Customers from '../Pages/Customers/Customers.js'
const AppRoutes = () => {
  return (
    
    <Routes>
      <Route path='/' element={<Dashboard />}></Route>
      <Route path='/inventory' element={<Inventory />}></Route>
      <Route path='/orders' element={<Orders />}></Route>
      <Route path='/customers' element={<Customers />}></Route>
    
    </Routes>
   
  )
}

export default AppRoutes
