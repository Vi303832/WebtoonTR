import { useState } from 'react'
import Navbar from './Navbar'
import './App.css'
import cat from "./assets/cutecat.jpg"
import Home from "./Home"
import Content from './Content'
import Newcomes from './Newcomes'

function App() {




  return (
    <>
      <div>
        <div className='min-h-screen'>
          <div className='h-full relative'>
            <Navbar />
            <Home />
          </div>
          <div className='h-full relative'>
            <Content />
            <hr className='text-white'></hr>
            <Newcomes />
          </div>



        </div>



      </div>

    </>
  )
}

export default App
