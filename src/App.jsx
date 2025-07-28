import { useState } from 'react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Allproduct } from './components/Allproduct'
import Login from './components/Login'
import { Addtocard } from './components/Addtocard'
import { MyOrder } from './pages/Myorder'
import { Admin } from './pages/Admin'
import { Upload } from './pages/upload'
import { Productdetail } from './components/productdetail'
import { Seller } from './components/seller'
import { AdminallProduct } from './pages/adminallproduct'
import { useAppContext } from './context/AppContext'
import AddressForm from './components/addAdress'
import axios from 'axios'
import './App.css'

// Axios default setup
// axios.defaults.withCredentials = true;

function App() {
  const { showUserLogin, setIsSeller, isSeller } = useAppContext()

  return (
    <>
      {showUserLogin && <Login />}
      {!isSeller && <Navbar />}

      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/all-product' element={<Allproduct />} />
          <Route path='/addtocart' element={<Addtocard />} />
          <Route path='/myorder' element={<MyOrder />} />
          <Route path='/all-product/:category/:id' element={<Productdetail />} />
          <Route path='/address' element={<AddressForm />} />


          

          {/* Seller */}
          <Route path='/seller' element={<Seller />} />

          {/* Admin */}
          <Route path='/admin' element={<Admin />}>
            <Route index element={<Upload />} />
            <Route path='upload' element={<Upload />} />
            <Route path='ad-allproduct' element={<AdminallProduct />} />
            {/* <Route path='dashboard' element={<Dashboard/>} /> */}
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
