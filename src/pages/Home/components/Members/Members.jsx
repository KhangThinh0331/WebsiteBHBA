import "./Members.css";
import logo from "../../../../assets/images/logoNew.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

const members = [
    {
        id: 1,
        name: "Công ty TNHH ABC",
        field: "Sản xuất – Thương mại",
        logo: logo,
    },
    {
        id: 2,
        name: "Công ty Cổ phần XYZ",
        field: "Công nghệ – Giải pháp số",
        logo: "https://picsum.photos/300/200?2",
    },
    {
        id: 3,
        name: "Công ty TNHH DEF",
        field: "Xây dựng – Nội thất",
        logo: "https://picsum.photos/300/200?3",
    },
    {
        id: 4,
        name: "Công ty TNHH An Phát",
        field: "Logistics – Xuất nhập khẩu",
        logo: "https://picsum.photos/300/200?4",
    },
];

const Members = () => {
    const navigate = useNavigate();

    return (
        <section className="members">
            <div className="container">
                <div className="section-title">
                    <h2><FaUsers /> Hội viên tiêu biểu</h2>
                    <p>Doanh nghiệp đồng hành cùng Hội</p>
                </div>

                <div className="member-slider">
                    {/* BUTTONS */}
                    <button className="nav-btn prev-members"><i className="fas fa-chevron-left"></i></button>
                    <button className="nav-btn next-members"><i className="fas fa-chevron-right"></i></button>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        loop={members.length >= 3}
                        centeredSlides
                        spaceBetween={30}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".next-members",
                            prevEl: ".prev-members",
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                centeredSlides: false,
                            },
                            768: {
                                slidesPerView: 2,
                                centeredSlides: true,
                            },
                            1024: {
                                slidesPerView: 3,
                                centeredSlides: true,
                            },
                        }}
                    >
                        {members.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div
                                    className="member-slide"
                                    onClick={() => navigate(`/hoi-vien/${item.id}`)}
                                >
                                    <img src={item.logo} alt={item.name} />

                                    {/* OVERLAY */}
                                    <div className="member-overlay">
                                        <h4>{item.name}</h4>
                                        <span>{item.field}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Members;
