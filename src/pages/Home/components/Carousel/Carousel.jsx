import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slider1 from "../../../../assets/images/slider1.JPG";
import slider2 from "../../../../assets/images/slider2.JPG";
import slider3 from "../../../../assets/images/slider3.JPG";
import slider4 from "../../../../assets/images/slider4.JPG";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
    {
        id: 1,
        image: slider2,
        title: "Cộng đồng Doanh nghiệp Phường Bảy Hiền",
        desc: "Đổi mới – Liên kết – Phát triển"
    },
    {
        id: 2,
        image: slider1,
        title: "Hoạt động – Sự kiện",
        desc: "Gắn kết cộng đồng doanh nghiệp địa phương"
    },
    {
        id: 3,
        image: slider3,
        title: "Xúc tiến thương mại",
        desc: "Hỗ trợ phát triển kinh doanh"
    },
    {
        id: 4,
        image: slider4,
        title: "Hỗ trợ doanh nghiệp",
        desc: "Định hướng phát triển bền vững"
    }
];

const Carousel = () => {
    return (
        <section className="hero">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false
                }}
                pagination={{ clickable: true }}
                navigation
                loop
                speed={800}
                className="hero-swiper"
            >
                {slides.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="hero-slide"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="hero-overlay">
                                <h1>{slide.title}</h1>
                                <p>{slide.desc}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Carousel;