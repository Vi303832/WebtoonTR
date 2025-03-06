import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import cutecat from "./assets/cutecat.jpg";
import thumb from "./assets/thumb.png";
import two from "./assets/02.jpg";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slidesData = [
    [cutecat, thumb, two, two, two],
    [thumb, two, two, two, cutecat],
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
                    <div className='w-full'>
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

                    <button
                        className="absolute left-[-40px] top-45  transform  z-10 bg-white p-2 rounded-full shadow-lg"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        &lt;
                    </button>

                    <button
                        className="absolute right-[-40px] top-45  transform  z-10 bg-white p-2 rounded-full shadow-lg"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        &gt;
                    </button>
                </div>





            </div>
        </div>
    );
}

export default Newcomes;