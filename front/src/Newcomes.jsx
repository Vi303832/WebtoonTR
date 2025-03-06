import React from 'react'
import Card from './Card'

function Newcomes() {
    return (
        <div className='font-Inter w-full bg-zinc-800 min-h-[50vh] flex justify-center'>
            <div className=' w-[80%]  h-[70vh]  mt-10 flex flex-col items-center '>
                <div className='text-4xl text-white py-5'>
                    Yeni Gelenler
                </div>

                <div className='w-full  flex justify-between items-center '>
                    <div className='absolute text-7xl left-10 text-white z-10'>{"<"}</div>
                    <div className='h-[30vh] overflow-hidden '>
                        <Card />
                    </div>
                    <div className='h-[30vh] overflow-hidden '>
                        <Card />
                    </div>
                    <div className='h-[30vh] overflow-hidden '>
                        <Card />
                    </div>
                    <div className='h-[30vh] overflow-hidden '>
                        <Card />
                    </div>
                    <div className='h-[30vh] overflow-hidden '>
                        <Card />
                    </div>
                    <div className='absolute text-7xl right-10 text-white z-10'>{">"}</div>


                </div>




            </div>
        </div>
    )
}

export default Newcomes