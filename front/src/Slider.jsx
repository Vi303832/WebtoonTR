import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import cutecat from "./assets/cutecat.jpg";

// Swiper stilleri
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let slides = [cutecat, cutecat, cutecat, cutecat, cutecat, cutecat, cutecat];

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
                    pagination={{ clickable: true, el: ".swiper-pagination", type: "bullets" }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-[500px] object-cover rounded-4xl" />
                        </SwiperSlide>
                    ))}

                </Swiper>


                <div className="swiper-pagination  relative mx-auto"></div>
            </div>

        </div>

    );
}

export default SliderComponent;