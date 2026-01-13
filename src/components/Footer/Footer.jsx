import "./Footer.css";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Cột 1: Logo + tên */}
                <div className="footer-col">
                    <img src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-1/602988843_122116122585062135_6578324462968533030_n.jpg?stp=c474.318.1100.1099a_dst-jpg_s200x200_tt6&_nc_cat=101&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=6nYR-EH_PJ8Q7kNvwG6le7X&_nc_oc=Adnj7fsNIHaX1craEchwUXnZmbqpERxfI0h9zA1woUESDvRc6bUuiWCfagzCGg6YsBU&_nc_zt=24&_nc_ht=scontent.fsgn5-13.fna&_nc_gid=qD05sp-PUuE_05HH-kZtyg&oh=00_Afrr8gbdNCGzfBCfbLxFDqSikiMbwB_aEBOImCoKyN8UVw&oe=696BC656" alt="Logo" className="footer-logo" />
                    <h3>HỘI DOANH NGHIỆP PHƯỜNG BẢY HIỀN</h3>
                    <p>
                        Kết nối – Hợp tác – Phát triển bền vững cộng đồng doanh nghiệp.
                    </p>
                </div>

                {/* Cột 2: Liên hệ */}
                <div className="footer-col">
                    <h4>Liên hệ</h4>
                    <ul>
                        <li>
                            <FaMapMarkerAlt />
                            <a href="https://www.google.com/maps?q=215+Trường+Chinh,+Phường+Bảy+Hiền,+Ho+Chi+Minh+City,+Vietnam+70000&hl=vi&fbclid=IwY2xjawPRhLRleHRuA2FlbQIxMABicmlkETEweFZBZmRIaVRNcjliYVJhc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHjJZ4kSbGImTTO020z7JIuioJeY6Wof5OPpctFIb4O1hx-8jv-93SRGfj65u_aem_dQ7cX4zWsudwI3xc52HMOQ" target="_blank" rel="noopener noreferrer">215 Trường Chinh, Phường Bảy Hiền, Thành phố Hồ Chí Minh</a>
                        </li>
                        <li>
                            <FaPhoneAlt />
                            <span>090 826 83 18</span>
                        </li>
                        <li>
                            <FaEnvelope />
                            <span>hdnbayhien@gmail.com</span>
                        </li>
                    </ul>
                </div>

                {/* Cột 3: Liên kết */}
                <div className="footer-col">
                    <h4>Liên kết nhanh</h4>
                    <ul className="footer-links">
                        <li><a href="/">Trang chủ</a></li>
                        <li><a href="/gioi-thieu">Giới thiệu</a></li>
                        <li><a href="/tin-tuc">Tin tức</a></li>
                        <li><a href="/tuyen-dung">Tuyển dụng</a></li>
                        <li><a href="/lien-he">Liên hệ</a></li>
                    </ul>
                </div>

                {/* Cột 4: Mạng xã hội */}
                <div className="footer-col social">
                    <h4>Kết nối với chúng tôi</h4>
                    <div className="socials">
                        <a href="https://www.facebook.com/hdnbayhien" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://www.youtube.com/@hoidoanhnghiepphuongbayhien" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                    </div>
                </div>
            </div>

            {/* Dòng bản quyền */}
            <div className="footer-bottom">
                © {new Date().getFullYear()} Hội doanh nghiệp Phường Bảy Hiền. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
