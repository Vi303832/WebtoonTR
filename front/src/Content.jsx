import React, { useState } from 'react'
import Hero1 from "./assets/Hero1.png"
import Card from './Card'
import CardE from './CardE'

function Content() {

    let [yeni, setyeni] = useState(true)

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

            <div className='min-h-screen w-full  bg-zinc-800 flex justify-center py-10'>
                <div className='h-full flex flex-col w-[80%]   '>
                    {/*} Datayı 8de sınırlayıp tek seferde böyle gösterebiliriz. Ama cardları saklamam lazım
                    <div className='flex justify-between flex-wrap '>
                        <div className='w-[24%]  flex justify-center bg-amber-300 items-center '>
                            <Card />
                        </div>
                        <div className='w-[24%]  flex justify-center'>
                            <Card />
                        </div>
                        <div className='w-[24%]  flex justify-center'>
                            <Card />
                        </div>
                        <div className='w-[24%] flex justify-center'>
                            <Card />
                        </div>
                        <div className='w-[24%] flex justify-center'>
                            <Card />
                        </div>
                        <div className='w-[24%]  flex justify-center'>
                            <Card />
                        </div>
                        <div className='w-[24%] flex justify-center'>
                            <Card />
                        </div>
                        <div className='w-[24%]  flex justify-center'>
                            <Card />
                        </div>
                    </div>
                    
                    
                    */}




                    {/*  Datayı 4lü/3lü/2li 2 gruba bölüp Datagrup[0] => / Datagrup[1] => diye burada 2 satır fetch edebiliriz.*/}
                    <div className='bg-yellow-400'>
                        <div className='flex justify-between max-md:justify-around max-sm:justify-between w-full overflow-hidden gap-5 max-sm:gap-2  '>
                            <Card yeni={yeni} />
                            <Card />
                            <div className="max-[772px]:hidden" >
                                <Card />
                            </div>
                            <div className="max-[1124px]:hidden" >
                                <Card />
                            </div>
                            <div className="max-[1378px]:hidden" >
                                <Card />
                            </div>

                        </div>
                    </div>


                    <div className='bg-yellow-400'>
                        <div className='flex justify-between max-md:justify-around max-sm:justify-between w-full overflow-hidden gap-5 max-sm:gap-2  '>
                            <CardE />
                            <CardE />
                            <div className="max-[772px]:hidden" >
                                <CardE />
                            </div>
                            <div className="max-[1124px]:hidden" >
                                <CardE />
                            </div>
                            <div className="max-[1378px]:hidden" >
                                <CardE />
                            </div>

                        </div>
                    </div>












                </div>
            </div>



        </div>

    )
}

export default Content