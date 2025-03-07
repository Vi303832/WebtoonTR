import React from 'react'
import Home from "./Home"
import Content from './Content'
import Newcomes from './Newcomes'
import Navbar from './Navbar'

function HomePage() {
    return (
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

    )
}

export default HomePage