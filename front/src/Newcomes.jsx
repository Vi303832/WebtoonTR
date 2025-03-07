import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import cutecat from "./assets/cutecat.jpg";
import thumb from "./assets/thumb.png";
import two from "./assets/02.jpg";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slidesData = [
    [cutecat, thumb, two, two, two],
    [thumb, two, two, two, cutecat],
];
const slidesData1 = [
    [cutecat, thumb, two, two,],
    [thumb, two, two, two,],
];


function Newcomes() {
    const swiperRef = useRef(null);

    return (
        <div className='font-Inter w-full bg-zinc-800 min-h-[50vh] flex justify-center'>
            <div className='w-[80%] h-[70vh] mt-10 flex flex-col items-center relative'>
                <div className='text-4xl text-white py-5'>
                    Yeni Gelenler
                </div>
                <div className='w-full h-[30vh]     '>
                    {/*Xl*/}
                    <div className='w-full max-lg:hidden block'>

                        <Swiper
                            style={{ position: "relative" }}
                            modules={[Pagination, Navigation]}
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={true}
                            pagination={{
                                dynamicBullets: true,
                                clickable: true,
                            }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {slidesData.map((slideImages, slideIndex) => (
                                <SwiperSlide key={slideIndex}>
                                    <div className="flex justify-between space-x-4">
                                        {slideImages.map((image, imageIndex) => (
                                            <div key={imageIndex} className="w-[18%] h-[30vh]">
                                                <img
                                                    src={image}
                                                    alt={`slide ${slideIndex + 1} image ${imageIndex + 1}`}

                                                    className="w-full h-[30vh] object-cover rounded-lg"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/*lg*/}
                    <div className='w-full hidden max-lg:block'>
                        <Swiper
                            style={{ position: "relative" }}
                            modules={[Pagination, Navigation]}
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={true}
                            pagination={{
                                dynamicBullets: true,
                                clickable: true,
                            }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {slidesData1.map((slideImages, slideIndex) => (
                                <SwiperSlide key={slideIndex}>
                                    <div className="flex justify-between space-x-4">
                                        {slideImages.map((image, imageIndex) => (
                                            <div key={imageIndex} className="w-[25%] h-[30vh]">
                                                <img
                                                    src={image}
                                                    alt={`slide ${slideIndex + 1} image ${imageIndex + 1}`}

                                                    className="w-full h-[30vh] object-cover rounded-lg"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <button
                        className="absolute left-[-60px] top-40  transform opacity-50 z-10 text-3xl cursor-pointer hover:opacity-100 bg-white p-2 rounded-full shadow-lg"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <FaAngleLeft />

                    </button>

                    <button
                        className="absolute right-[-60px] top-40 opacity-50 hover:opacity-100 cursor-pointer transform text-3xl  z-10 bg-white p-2 rounded-full shadow-lg"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <FaAngleRight />
                    </button>
                </div>





            </div>
        </div>
    );
}

export default Newcomes