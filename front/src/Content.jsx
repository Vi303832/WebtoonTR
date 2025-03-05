import React from 'react'
import Hero1 from "./assets/Hero1.png"


function Content() {



    return (
        <div className='font-Inter w-full '>
            <div className='bg-zinc-900 w-full h-[100px] max-lg: overflow-hidden relative flex items-center justify-center '>
                <div className='flex items-center w-[80%]  justify-between text-white text-xl max-lg:hidden'>
                    <div>
                        Okul Hayatı
                    </div>
                    <div>
                        Romantizm
                    </div>
                    <div>
                        Psikolojik
                    </div>
                    <div>
                        Dram
                    </div>
                    <div>
                        Fantastik
                    </div>
                    <div>
                        İsekai
                    </div>
                    <div>
                        Bilim Kurgu
                    </div>
                    <div>
                        Komedi
                    </div>
                </div>

            </div>

            <div className='h-[50vh] max-lg:h-[60vh] max-md:h-[130vh] w-full bg-zinc-800 flex items-center justify-center  '>
                <div className=' w-[80%] items-center justify-center h-full py-10  '>
                    <div className='h-[10vh] text-3xl text-white flex flex-col  gap-5 max-md:h-[15vh]'>
                        <div>      En son yayınlanan bloglara göz at!</div>
                        <hr />
                    </div>
                    <div className='flex gap-20  h-[30vh] max-md:h-[80vh]  max-md:gap-40  items-end max-md:flex-col max-md:items-center max-md:justify-end  '>

                        <div className=' w-[50%] h-[25vh] flex gap-5 items-center  max-lg:flex-col '>
                            <div className='h-[150px] w-[50%] max-md:w-full '>
                                <img src={Hero1} className='h-full w-full rounded object-cover' />
                            </div>
                            <div className='w-[40%]  h-[90%]  flex flex-col gap-3   max-lg:w-full text-white'>
                                <div className='text-lg'>
                                    Türkçe Webtoon Oku, Webtoon Nedir ve Nerede Okunur?
                                </div>
                                <div className='text-xs'>
                                    Webtoonlar, dijital platformlarda yayınlanan çizgi modern çizgi romanlardır. Mangadan farklı olarak...
                                </div>
                            </div>


                        </div>
                        <div className=' w-[50%] h-[25vh] flex gap-5 items-center max-lg:flex-col  '>
                            <div className='h-[150px] w-[50%] max-md:w-full '>
                                <img src={Hero1} className='h-full w-full rounded    ' />
                            </div>
                            <div className='w-[40%]  h-[90%] max-lg:w-full flex flex-col gap-3  text-white'>
                                <div className='text-lg'>
                                    Türkçe Webtoon Oku, Webtoon Nedir ve Nerede Okunur?
                                </div>
                                <div className='text-xs'>
                                    Webtoonlar, dijital platformlarda yayınlanan çizgi modern çizgi romanlardır. Mangadan farklı olarak...
                                </div>
                            </div>


                        </div>
                    </div>
                </div>



            </div>


        </div>

    )
}

export default Content