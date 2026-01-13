import "./Home.css";
import overviewImg from "../../assets/images/overview.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const newsData = [
    { img: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/605776706_122117838453062135_5768990852661893842_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=108&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wtbgx93Kv5gQ7kNvwHjn5e2&_nc_oc=Admm1Oix9KD4njIVT31_SYZRoHQ3bAlC3ZE6eJwIm17T8p1jc5an1PKRf7FZ147zFwE&_nc_zt=23&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=7S8B7V6GjK3faI5teP9FfQ&oh=00_Afrwz6FIGOXRH3ZmACTZ1Yxtt5IBAaa0pFEIGpVeWaMEhQ&oe=696BCE70", title: "Đại hội Hội Doanh nghiệp phường Bảy Hiền nhiệm kỳ 2025–2030", desc: "“Đổi mới – Liên kết – Phát triển”\nĐại hội Hội Doanh nghiệp phường Bảy Hiền nhiệm kỳ 2025–2030 đã diễn ra trang trọng, thành công tốt đẹp, với sự hiện diện của Quý Lãnh đạo, Quý đại biểu, Quý doanh nghiệp và khách mời." },
    { img: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/599733188_122115416025062135_4565594644630184347_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=105&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kjqN2mVcAkQQ7kNvwE0dn9M&_nc_oc=AdmZUtFQrjzJg5hDgMahqNoW9GtL5oKurQV-EJWW0kVAfDCAT8j3Jkc3jVxrQOgeyNI&_nc_zt=23&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=liNG5lLNP4u9kJajgtngCw&oh=00_Afqyd5ZLEXGx6CfVbx3jd9trhrzkDtiyoLEQDFGRSiclVg&oe=696B9BBC", title: "Họp Ban vận động thành lập Hội doanh nghiệp Phường Bảy Hiền", desc: "Sáng nay 20/12/2025, tại 215 Trường Chinh – phường Bảy Hiền, Ban Vận động thành lập Hội Doanh nghiệp phường Bảy Hiền đã tổ chức cuộc họp quan trọng nhằm thống nhất các nội dung chuẩn bị cho Đại hội thành lập Hội sắp tới." },
    { img: "https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/602979988_122116158513062135_6270067419285706328_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=107&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6EJTwYEBwVwQ7kNvwFRe24p&_nc_oc=AdnoKulnIx5h-jk6rmy4AL-91RnGAfRQHmTPWzb2fxie5eRFD613rv5dHDJJqaX-WNU&_nc_zt=23&_nc_ht=scontent.fsgn5-13.fna&_nc_gid=hgdghqhctsHmPH0nVeWMNA&oh=00_AfpneaWsz7GYAeiI7kASlgNHhe6ctCB0D54bqCumwLO6Fw&oe=696BB8B8", title: "CAYARD SPARKLING – NÂNG LY LỄ HỘI", desc: "Không cồn nhưng vẫn đủ tinh tế để chạm vào cảm xúc lễ hội. Cayard Sparkling là dòng nước ép trái cây có gas cao cấp, mang trải nghiệm như vang sủi: bọt khí mịn, hương trái cây tự nhiên, cảm giác nâng ly đầy hứng khởi – phù hợp cho mọi độ tuổi và mọi khoảnh khắc sum vầy." },
    { img: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/558763549_122099219409062135_7763018351135952073_n.jpg?stp=cp6_dst-jpg_s590x590_tt6&_nc_cat=108&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=833d8c&_nc_ohc=q8srI59mErQQ7kNvwEN0jsq&_nc_oc=AdmFFyOu2-B-md_zaE-R0BsfhAQzPW3EA01qKqPnn5FkafTEGkY7lua-htXjldZfFdA&_nc_zt=23&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=OfGYdqsuLlbyGdlH2IPOYg&oh=00_AfrfIOz1ljro9XtGw8lkt-9R2QPP8uIBE0DWfwakUBTlBw&oe=696BAD6E", title: "Lễ ra mắt Ban Vận động thành lập Hội", desc: "Chiều ngày 09/10/2025, tại Hội trường Ủy ban nhân dân Phường Bảy Hiền (TP. Hồ Chí Minh) đã diễn ra Lễ ra mắt Ban Vận động thành lập Hội Doanh nghiệp Phường Bảy Hiền trong không khí trang trọng và ấm áp." }
];

const events = [
    { date: "20/02/2026", title: "Hội thảo kết nối doanh nghiệp", location: "UBND Phường Bảy Hiền" },
    { date: "15/03/2026", title: "Chương trình xúc tiến thương mại", location: "Giao lưu – quảng bá sản phẩm" },
    { date: "15/03/2026", title: "Chương trình xúc tiến thương mại", location: "Giao lưu – quảng bá sản phẩm" }
];

const sponsors = [
    { img: "https://htv.mediacdn.vn/zoom/600_315/155334506109014016/2025/11/3/23a79ad31a8196dfcf909-1762137905984598578400-43-0-1048-1920-crop-17621382625892042119390.jpg", name: "UBND Phường Bảy Hiền" },
    { img: "https://winecolor.vn/wp-content/uploads/2024/03/Logo-CTY-2-2048x530.png", name: "Công ty TNHH WINE COLOR" },
    { img: "https://kienthietviet.com/wp-content/uploads/2020/05/cropped-cropped-LOGO-02-2048x512.png", name: "Công ty Cổ phần Thiết Kế – Xây Dựng & Đào Tạo Kiến Thiết Việt" },
    { img: "https://winecolor.vn/wp-content/uploads/2024/03/Logo-CTY-2-2048x530.png", name: "Công ty TNHH WINE COLOR" }
]
const Home = () => {
    return (
        <div className="home">

            {/* ===== Tổng quan ===== */}
            <section className="overview">
                <div className="container overview-content">
                    <div className="overview-text">
                        <h2>Hội Doanh Nghiệp Phường Bảy Hiền</h2>
                        <p>
                            Hội Doanh Nghiệp Phường Bảy Hiền là cầu nối giữa các doanh nghiệp,
                            thúc đẩy hợp tác – xúc tiến thương mại.
                        </p>
                        <a href="/gioi-thieu" className="btn-primary">Xem thêm</a>
                    </div>
                    <div className="overview-image">
                        <img src={overviewImg} alt="Tổng quan hội" />
                    </div>
                </div>
            </section>

            {/* ===== Tin nổi bật ===== */}
            <section className="featured-news">
                <div className="container">
                    <h2 className="section-title">Tin nổi bật</h2>
                    <div className="swiper-holder">
                        <button className="nav-btn prev-news"><i className="fas fa-chevron-left"></i></button>
                        <button className="nav-btn next-news"><i className="fas fa-chevron-right"></i></button>

                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                prevEl: ".prev-news",
                                nextEl: ".next-news"
                            }}
                            spaceBetween={24}
                            slidesPerView={3}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 }
                            }}
                        >
                            {newsData.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className="news-card">
                                        <img src={item.img} alt={item.title} />
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                        <a href="/tin-tuc">Xem chi tiết</a>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
            </section>

            {/* ===== Sự kiện ===== */}
            <section className="upcoming-events">
                <div className="container">
                    <h2 className="section-title">Sự kiện sắp tới</h2>
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

            {/* ===== Đối tác ===== */}
            <section className="partners">
                <div className="container">
                    <h2 className="section-title">Đối tác & Nhà tài trợ</h2>

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

        </div>
    );
};

export default Home;
