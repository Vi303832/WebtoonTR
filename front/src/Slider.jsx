import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import cutecat from "./assets/cutecat.jpg";
import thumb from "./assets/thumb.png"
import two from "./assets/02.jpg"
// Swiper stilleri
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let slides = [two, two, thumb, thumb, cutecat, cutecat, cutecat];

function SliderComponent() {
    return (
        <div>
            <div className='w-full h-[500px] relative rounded-4xl overflow-hidden flex justify-center'>
                <Swiper
                    style={{ position: "relative" }}
                    modules={[Pagination, Autoplay]}
                    spaceBetween={5}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    pagination={{ clickable: true, type: "bullets" }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-[500px] object-cover rounded-4xl" />
                        </SwiperSlide>
                    ))}

                </Swiper>

                {
                    /*
                    <div className='w-32 h-4 absolute bottom-5 flex items-center justify-center '>
                                        <div className='absolute h-full w-full bg-black z-10 rounded-3xl opacity-50'>
                                        </div>
                                        <div className="swiper-pagination     rounded-3xl  flex items-center justify-center w-full h-full  ">
                    
                                        </div>
                                    </div>
                    */
                }


            </div>

        </div>

    );
}

export default SliderComponent;