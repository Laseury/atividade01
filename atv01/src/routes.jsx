import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MyNavbar from './components/nav'
import Dashboard from './pages/dashboard'
import MyUser from './pages/user'
import MyClient from './pages/cliente'
import MyProduct from './pages/product'

const RoutesAPP = () => {
  return (
    <div>
      
    <BrowserRouter>
    <MyNavbar/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/user' element={<MyUser/>}/>
      <Route path='/cliente' element={<MyClient/>}/>
      <Route path='/produto' element={<MyProduct/>}/>
    
    </Routes>
    </BrowserRouter>

    </div>
  )
}

export default RoutesAPP