import React from 'react'
import Navbar from './Navbar'
import bg from "./assets/bg.jpg"

function Login() {
    return (
        <div>
            <Navbar />

            <div className='min-h-screen' >
                <div className='absolute w-full h-full -z-10 '>
                    <div className='bg-black opacity-60 h-full w-full absolute '></div>
                    <img src={bg} className='w-full h-full object-cover -' />
                </div>

                <div className=' z-30 h-screen flex justify-center items-center     '>
                    <div className='bg-yellow-300 h-[80%] w-[80%] rounded-4xl' >


                    </div>

                </div>

            </div>

        </div>
    )
}

export default Login