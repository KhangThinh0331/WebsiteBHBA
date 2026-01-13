import { NavLink } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";

import {
    FaHome,
    FaInfoCircle,
    FaUsers,
    FaNewspaper,
    FaChartLine,
    FaBriefcase,
    FaCalendarAlt,
    FaImages,
    FaPhoneAlt
} from "react-icons/fa";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <div className="header-container">
                <div className="logo">
                    <a href="/"><img src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-1/602988843_122116122585062135_6578324462968533030_n.jpg?stp=c474.318.1100.1099a_dst-jpg_s200x200_tt6&_nc_cat=101&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=6nYR-EH_PJ8Q7kNvwG6le7X&_nc_oc=Adnj7fsNIHaX1craEchwUXnZmbqpERxfI0h9zA1woUESDvRc6bUuiWCfagzCGg6YsBU&_nc_zt=24&_nc_ht=scontent.fsgn5-13.fna&_nc_gid=qD05sp-PUuE_05HH-kZtyg&oh=00_Afrr8gbdNCGzfBCfbLxFDqSikiMbwB_aEBOImCoKyN8UVw&oe=696BC656" alt="Logo" /></a>
                </div>

                <nav className="nav">
                    <div className="nav-main">
                        <NavLink to="/" end><FaHome /> Trang chủ</NavLink>
                        <NavLink to="/gioi-thieu"><FaInfoCircle /> Giới thiệu</NavLink>
                        <NavLink to="/hoi-vien"><FaUsers /> Hội viên</NavLink>
                        <NavLink to="/tin-tuc"><FaNewspaper /> Tin tức</NavLink>
                        <NavLink to="/su-kien"><FaCalendarAlt /> Sự kiện</NavLink>
                    </div>

                    <div className="nav-extra">
                        <button
                            className={`menu-toggle ${open ? "active" : ""}`}
                            onClick={() => setOpen(!open)}
                            aria-label="Menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <div className={`dropdown ${open ? "open" : ""}`}>
                            <NavLink to="/xuc-tien"><FaChartLine /> Xúc tiến thương mại</NavLink>
                            <NavLink to="/tuyen-dung"><FaBriefcase /> Tuyển dụng</NavLink>
                            <NavLink to="/thu-vien"><FaImages /> Thư viện</NavLink>
                            <NavLink to="/lien-he" className="contact"><FaPhoneAlt /> Liên hệ</NavLink>
                        </div>
                    </div>
                </nav>

            </div>
        </header>
    );
};

export default Header;
