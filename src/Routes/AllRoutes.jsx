import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Products from './Products'
import SingleProducts from './SingleProducts'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/products/:id" element={<SingleProducts />}/>
        </Routes>

    </div>
  )
}

export default AllRoutes