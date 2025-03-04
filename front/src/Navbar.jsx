import React from 'react'
import Logo from "./assets/WebtoonTRLogo.png"
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { LuPen } from "react-icons/lu";
import { FaBars } from "react-icons/fa";

function Navbar() {
    return (
        <div>


            <div className='h-[100px]  w-full  font-Inter text-black text-lg bg-[#E44539] flex items-center justify-center '>
                <div className='h-full w-[80%] flex justify-between  items-center gap-0  '>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center  gap-10 text-white'>
                            <img src={Logo} className='w-[124px] h-[124px] relative top-2' />
                            <div className='flex gap-10 max-md:hidden'>
                                <div className='h-[32px]'>
                                    KATMAN
                                </div>
                                <div className='h-[32px]'>
                                    YILDIZLAR
                                </div>
                                <div className='h-[32px]'>
                                    SEZON
                                </div>
                                <div className='h-[32px]'>
                                    POPÜLER SERİLER
                                </div>

                            </div>
                        </div>

                        <div className='flex items-center gap-5 max-md:hidden'>

                            <button className='h-[36px] w-[84px] flex gap-1 items-center rounded-xl text-white bg-[#4CAADF]  '>
                                <LuPen className=' ml-2  text-xl ' />
                                <div className='text-xs font-light '>
                                    Yayınla!

                                </div>
                            </button>
                            <button className='h-[32px] w-[84px] border-2 border-white rounded-xl text-center text-sm text-white font-light'>
                                Giriş Yap
                            </button>
                        </div>

                    <div className='text-2xl p-10 text-white hidden max-md:flexé'>

                            <FaBars />


                        </div>




                    </div>






                </div>



            </div>



        </div>

    )
}

export default Navbar