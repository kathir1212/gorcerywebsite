import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { useAppContext } from './context/AppContext'
import { Allproduct } from './components/Allproduct'
import Login from './components/Login'
import { Addtocard } from './components/Addtocard'
import { MyOrder } from './pages/Myorder'
import { Admin } from './pages/Admin'
import { Upload } from './pages/upload'
import { AdminallProduct } from './pages/adminallproduct'
import { Dashboard } from './pages/dashboard'
import { Productdetail } from './components/productdetail'

function App() {

  const {showUserLogin , setIsSeller , isSeller} = useAppContext()



  return (
    <>
    {showUserLogin ? <Login/> : null}
  {isSeller ? null :  < Navbar/>} 
    <div className='px-6  md:px-16 lg:px-24 xl:px-32'>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/all-product' element={<Allproduct/>}/>
          <Route path='/addtocart' element={<Addtocard/>}/>
          <Route path='/myorder' element={<MyOrder/>}/>
          <Route path='/all-product/:cateogry/:id' element={<Productdetail/>}/>


          
      </Routes>
    </div>


    <div>
       <Routes>
       
        <Route path="/admin" element={<Admin />}>
         

          <Route path="upload" element={<Upload />} />
          <Route path="ad-allproduct" element={<AdminallProduct/>} />
          <Route path="dashboard" element={<Dashboard/>} />


          
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
