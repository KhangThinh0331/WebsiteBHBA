import "./Partners.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaHandshake } from "react-icons/fa";

import "swiper/css";

const sponsors = [
    { img: "https://htv.mediacdn.vn/zoom/600_315/155334506109014016/2025/11/3/23a79ad31a8196dfcf909-1762137905984598578400-43-0-1048-1920-crop-17621382625892042119390.jpg", name: "UBND Phường Bảy Hiền" },
    { img: "https://winecolor.vn/wp-content/uploads/2024/03/Logo-CTY-2-2048x530.png", name: "Công ty TNHH WINE COLOR" },
    { img: "https://kienthietviet.com/wp-content/uploads/2020/05/cropped-cropped-LOGO-02-2048x512.png", name: "Công ty Cổ phần Thiết Kế – Xây Dựng & Đào Tạo Kiến Thiết Việt" },
    { img: "https://winecolor.vn/wp-content/uploads/2024/03/Logo-CTY-2-2048x530.png", name: "Công ty TNHH WINE COLOR" }
]

const Partners = () => {
    return (
        <section className="partners">
            <div className="container">
                <div className="section-title">
                    <h2><FaHandshake /> Đối tác & Nhà tài trợ</h2>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    speed={7000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    spaceBetween={40}
                    breakpoints={{
                        0: { slidesPerView: 1.4 },
                        768: { slidesPerView: 2.5 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="partner-swiper"
                >
                    {sponsors.map((sponsor, i) => (
                        <SwiperSlide key={i}>
                            <div className="partner-item">
                                <img src={sponsor.img} alt="Đối tác" />
                                <p>{sponsor.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Partners;