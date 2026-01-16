import "./Events.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaCalendarAlt } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const events = [
    { date: "20/02/2026", title: "Hội thảo kết nối doanh nghiệp", location: "UBND Phường Bảy Hiền" },
    { date: "15/03/2026", title: "Chương trình xúc tiến thương mại", location: "Giao lưu – quảng bá sản phẩm" },
    { date: "15/03/2026", title: "Chương trình xúc tiến thương mại", location: "Giao lưu – quảng bá sản phẩm" }
];

const Events = () => {
    return (
        <section className="upcoming-events">
            <div className="container">
                <div className="section-title">
                    <h2><FaCalendarAlt /> Sự kiện sắp tới</h2>
                </div>
                <div className="swiper-holder">
                    <button className="nav-btn prev-event"><i className="fas fa-chevron-left"></i></button>
                    <button className="nav-btn next-event"><i className="fas fa-chevron-right"></i></button>
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".prev-event",
                            nextEl: ".next-event"
                        }}
                        spaceBetween={24}
                        slidesPerView={2}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 }
                        }}
                    >
                        {events.map((e, i) => (
                            <SwiperSlide key={i}>
                                <div className="event-item">
                                    <div className="event-date">
                                        <span>{e.date.split("/")[0]}</span>
                                        <small>{e.date.slice(3)}</small>
                                    </div>
                                    <div className="event-info">
                                        <h3>{e.title}</h3>
                                        <p>{e.location}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
}

export default Events;