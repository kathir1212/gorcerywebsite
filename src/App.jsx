import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar/>
    <div className='px-6  md:px-16 lg:px-24 xl:px-32'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    
    </>
  )
}

export default App
