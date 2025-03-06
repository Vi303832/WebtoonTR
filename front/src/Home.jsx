import React from 'react'
import Slider from './Slider'
import bg from "./assets/bg.jpg"



function Home() {
    return (

        <div className='min-h-screen' >
            <div className='absolute w-full max-2xl:h-[58vw] max-xl:  max-xl:h-[75vw]   max-lg:h-[85vw] max-[56rem]:h-[100vw]  max-md:h-[120vw] max-sm:h-[150vw] '>
                <div className='bg-black opacity-60 h-full w-full absolute'></div>
                <img src={bg} className='w-full h-full object-cover' />
            </div>

            <div className=' w-[80%] min-h-screen  mx-auto pt-10'>

                {/*Hero1*/}
                <div


                    className=' w-full h-[500px] flex justify-between  '>
                    <div className='bg-gray-500 w-full h-full rounded-4xl max-md:w-full'>
                        <Slider />

                    </div>
                    <div>

                    </div>

                </div>

                {/*Hero1*/}

                <div className=' z-30 relative w-full h-[164px] my-2 gap-2 flex  justify-center '>
                    <div className='w-[33%] bg-green-300 rounded-4xl max-md:w-[48%]'>

                    </div>
                    <div className='w-[33%] bg-green-300 rounded-4xl max-md:hidden '>

                    </div>
                    <div className='w-[33%] bg-green-300 rounded-4xl max-md:w-[48%]'>

                    </div>





                </div>



            </div>







        </div>

    )
}

export default Home