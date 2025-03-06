import React from 'react'

function Card() {






    return (
        <div className='font-Inter  max-lg:h-[324px] max-lg:w-[208px] h-[384px] w-[208px]  flex items-center flex-col justify-start '>
            <div className='h-[216px] bg-white max-lg:w-[192px] w-[208px] rounded flex flex-col  '>
                {/*image*/}
                <div>
                    <img src='https://i1.wp.com/webtoonturkiye.com/wp-content/uploads/2025/03/oyun-baslasin-webtoon-thumbnail.jpg' className='rounded' />
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