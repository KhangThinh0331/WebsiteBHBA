import "./News.css";
import news1 from "../../../../assets/images/news1.jpg";
import news2 from "../../../../assets/images/news2.jpg";
import news3 from "../../../../assets/images/news3.jpg";
import news4 from "../../../../assets/images/news4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaNewspaper } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const newsData = [
    { img: news1, title: "Đại hội Hội Doanh nghiệp phường Bảy Hiền nhiệm kỳ 2025–2030", desc: "“Đổi mới – Liên kết – Phát triển”\nĐại hội Hội Doanh nghiệp phường Bảy Hiền nhiệm kỳ 2025–2030 đã diễn ra trang trọng, thành công tốt đẹp, với sự hiện diện của Quý Lãnh đạo, Quý đại biểu, Quý doanh nghiệp và khách mời." },
    { img: news2, title: "Họp Ban vận động thành lập Hội doanh nghiệp Phường Bảy Hiền", desc: "Sáng nay 20/12/2025, tại 215 Trường Chinh – phường Bảy Hiền, Ban Vận động thành lập Hội Doanh nghiệp phường Bảy Hiền đã tổ chức cuộc họp quan trọng nhằm thống nhất các nội dung chuẩn bị cho Đại hội thành lập Hội sắp tới." },
    { img: news3, title: "CAYARD SPARKLING – NÂNG LY LỄ HỘI", desc: "Không cồn nhưng vẫn đủ tinh tế để chạm vào cảm xúc lễ hội. Cayard Sparkling là dòng nước ép trái cây có gas cao cấp, mang trải nghiệm như vang sủi: bọt khí mịn, hương trái cây tự nhiên, cảm giác nâng ly đầy hứng khởi – phù hợp cho mọi độ tuổi và mọi khoảnh khắc sum vầy." },
    { img: news4, title: "Lễ ra mắt Ban Vận động thành lập Hội", desc: "Chiều ngày 09/10/2025, tại Hội trường Ủy ban nhân dân Phường Bảy Hiền (TP. Hồ Chí Minh) đã diễn ra Lễ ra mắt Ban Vận động thành lập Hội Doanh nghiệp Phường Bảy Hiền trong không khí trang trọng và ấm áp." }
];

const News = () => {
    return (
        <section className="featured-news">
            <div className="container">
                <div className="section-title">
                    <h2><FaNewspaper /> Tin nổi bật</h2>
                </div>
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
    );
}

export default News;