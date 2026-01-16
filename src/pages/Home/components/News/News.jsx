import "./News.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaNewspaper } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const newsData = [
    { img: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/605776706_122117838453062135_5768990852661893842_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=108&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wtbgx93Kv5gQ7kNvwHjn5e2&_nc_oc=Admm1Oix9KD4njIVT31_SYZRoHQ3bAlC3ZE6eJwIm17T8p1jc5an1PKRf7FZ147zFwE&_nc_zt=23&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=7S8B7V6GjK3faI5teP9FfQ&oh=00_Afrwz6FIGOXRH3ZmACTZ1Yxtt5IBAaa0pFEIGpVeWaMEhQ&oe=696BCE70", title: "Đại hội Hội Doanh nghiệp phường Bảy Hiền nhiệm kỳ 2025–2030", desc: "“Đổi mới – Liên kết – Phát triển”\nĐại hội Hội Doanh nghiệp phường Bảy Hiền nhiệm kỳ 2025–2030 đã diễn ra trang trọng, thành công tốt đẹp, với sự hiện diện của Quý Lãnh đạo, Quý đại biểu, Quý doanh nghiệp và khách mời." },
    { img: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/599733188_122115416025062135_4565594644630184347_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=105&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kjqN2mVcAkQQ7kNvwE0dn9M&_nc_oc=AdmZUtFQrjzJg5hDgMahqNoW9GtL5oKurQV-EJWW0kVAfDCAT8j3Jkc3jVxrQOgeyNI&_nc_zt=23&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=liNG5lLNP4u9kJajgtngCw&oh=00_Afqyd5ZLEXGx6CfVbx3jd9trhrzkDtiyoLEQDFGRSiclVg&oe=696B9BBC", title: "Họp Ban vận động thành lập Hội doanh nghiệp Phường Bảy Hiền", desc: "Sáng nay 20/12/2025, tại 215 Trường Chinh – phường Bảy Hiền, Ban Vận động thành lập Hội Doanh nghiệp phường Bảy Hiền đã tổ chức cuộc họp quan trọng nhằm thống nhất các nội dung chuẩn bị cho Đại hội thành lập Hội sắp tới." },
    { img: "https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/602979988_122116158513062135_6270067419285706328_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=107&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6EJTwYEBwVwQ7kNvwFRe24p&_nc_oc=AdnoKulnIx5h-jk6rmy4AL-91RnGAfRQHmTPWzb2fxie5eRFD613rv5dHDJJqaX-WNU&_nc_zt=23&_nc_ht=scontent.fsgn5-13.fna&_nc_gid=hgdghqhctsHmPH0nVeWMNA&oh=00_AfpneaWsz7GYAeiI7kASlgNHhe6ctCB0D54bqCumwLO6Fw&oe=696BB8B8", title: "CAYARD SPARKLING – NÂNG LY LỄ HỘI", desc: "Không cồn nhưng vẫn đủ tinh tế để chạm vào cảm xúc lễ hội. Cayard Sparkling là dòng nước ép trái cây có gas cao cấp, mang trải nghiệm như vang sủi: bọt khí mịn, hương trái cây tự nhiên, cảm giác nâng ly đầy hứng khởi – phù hợp cho mọi độ tuổi và mọi khoảnh khắc sum vầy." },
    { img: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/558763549_122099219409062135_7763018351135952073_n.jpg?stp=cp6_dst-jpg_s590x590_tt6&_nc_cat=108&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=833d8c&_nc_ohc=q8srI59mErQQ7kNvwEN0jsq&_nc_oc=AdmFFyOu2-B-md_zaE-R0BsfhAQzPW3EA01qKqPnn5FkafTEGkY7lua-htXjldZfFdA&_nc_zt=23&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=OfGYdqsuLlbyGdlH2IPOYg&oh=00_AfrfIOz1ljro9XtGw8lkt-9R2QPP8uIBE0DWfwakUBTlBw&oe=696BAD6E", title: "Lễ ra mắt Ban Vận động thành lập Hội", desc: "Chiều ngày 09/10/2025, tại Hội trường Ủy ban nhân dân Phường Bảy Hiền (TP. Hồ Chí Minh) đã diễn ra Lễ ra mắt Ban Vận động thành lập Hội Doanh nghiệp Phường Bảy Hiền trong không khí trang trọng và ấm áp." }
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