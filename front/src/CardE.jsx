import React, { useState } from 'react'
import { GiAcousticMegaphone } from "react-icons/gi";

function Card({ yeni }) {





    return (
        <div className='font-Inter  max-lg:h-[324px]  h-[384px] w-[208px]  flex items-center flex-col justify-start '>
            <div className='h-[216px] bg-white max-lg:w-[192px] w-[208px] rounded flex flex-col  '>
                {/*image*/}
                <div className='relative '>

                    <img src='https://i3.wp.com/webtoonturkiye.com/wp-content/uploads/2024/11/new.png' className='rounded' />
                    {yeni && <div className='absolute bg-[#4CAADF] bottom-0 px-1 rounded flex items-center text-[14px] '><GiAcousticMegaphone className='text-lg ' />YENİ</div>}

                </div>

                {/*Foto*/}
                <div className='text-white flex justify-center w-full h-full p-1'>
                    <div className='w-full h-full overflow-hidden text-ellipsis whitespace-nowrap'>
                        Example Template, Example TemplateExample TemplateExample Template
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Card