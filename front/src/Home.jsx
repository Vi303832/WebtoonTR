import React from 'react'
import Slider from './Slider'
function Home() {
    return (
        <div>
            <div className='bg-red-300 w-[80%] h-screen mx-auto pt-5'>

                {/*Hero1*/}
                <div className=' w-full h-[500px] flex justify-between '>
                    <div className='bg-gray-500 w-full h-full rounded-4xl max-md:w-full'>
                        <Slider />
                    </div>


                </div>


            </div>

            {/*Hero1*/}





        </div>
    )
}

export default Home