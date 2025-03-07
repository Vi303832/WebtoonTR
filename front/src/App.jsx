import { useState } from 'react'
import Navbar from './Navbar'
import './App.css'
import cat from "./assets/cutecat.jpg"
import Page from "./Page"
import { Routes, Route } from "react-router"
import Login from './Login'


function App() {




  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Page />} />
          <Route path='/Login' element={<Login />} />


        </Routes>




      </div>

    </>
  )
}

export default App
