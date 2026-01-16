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
    FaPhoneAlt,
    FaFacebookF,
    FaYoutube
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

    const [mobileDropdown, setMobileDropdown] = useState(null);

    const toggleMobileDropdown = (key) => {
        setMobileDropdown(mobileDropdown === key ? null : key);
    };

    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <div className="header-container">
                <div className="logo">
                    <NavLink to="/"><img src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-1/602988843_122116122585062135_6578324462968533030_n.jpg?stp=c474.318.1100.1099a_dst-jpg_s200x200_tt6&_nc_cat=101&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=6nYR-EH_PJ8Q7kNvwG6le7X&_nc_oc=Adnj7fsNIHaX1craEchwUXnZmbqpERxfI0h9zA1woUESDvRc6bUuiWCfagzCGg6YsBU&_nc_zt=24&_nc_ht=scontent.fsgn5-13.fna&_nc_gid=qD05sp-PUuE_05HH-kZtyg&oh=00_Afrr8gbdNCGzfBCfbLxFDqSikiMbwB_aEBOImCoKyN8UVw&oe=696BC656" alt="Logo" /></NavLink>
                </div>

                <nav className="nav">
                    <div className="nav-main">

                        <NavLink to="/" end><FaHome /> Trang chủ</NavLink>

                        {/* GIỚI THIỆU */}
                        <div className="nav-item has-dropdown">
                            <span><FaInfoCircle /> Giới thiệu</span>
                            <div className="dropdown-sub">
                                <NavLink to="/gioi-thieu/lich-su">Lịch sử & Sứ mệnh</NavLink>
                                <NavLink to="/gioi-thieu/co-cau">Cơ cấu tổ chức</NavLink>
                                <NavLink to="/gioi-thieu/dieu-le">Điều lệ & Điều kiện</NavLink>
                            </div>
                        </div>

                        {/* HỘI VIÊN */}
                        <div className="nav-item has-dropdown">
                            <span><FaUsers /> Hội viên</span>
                            <div className="dropdown-sub">
                                <NavLink to="/hoi-vien/danh-ba">Danh bạ doanh nghiệp</NavLink>
                                <NavLink to="/hoi-vien/dang-ky">Đăng ký hội viên</NavLink>
                                <NavLink to="/hoi-vien/quan-ly">Quản lý hội viên</NavLink>
                            </div>
                        </div>

                        {/* TIN TỨC & HOẠT ĐỘNG */}
                        <div className="nav-item has-dropdown">
                            <span><FaNewspaper /> Tin tức & Hoạt động</span>
                            <div className="dropdown-sub">
                                <NavLink to="/tin-tuc/hoi">Hoạt động Hội</NavLink>
                                <NavLink to="/tin-tuc/hoi-vien">Hoạt động Hội viên</NavLink>
                                <NavLink to="/tin-tuc/chuyen-nganh">Tin chuyên ngành</NavLink>
                            </div>
                        </div>

                        {/* XÚC TIẾN */}
                        <div className="nav-item has-dropdown">
                            <span><FaChartLine /> Xúc tiến thương mại</span>
                            <div className="dropdown-sub">
                                <NavLink to="/xuc-tien/gian-hang">Gian hàng hội viên</NavLink>
                                <NavLink to="/xuc-tien/b2b">Kết nối giao thương (B2B)</NavLink>
                            </div>
                        </div>

                    </div>

                    <div className="nav-extra">
                        <div className="mobile-social">
                            <a href="https://www.facebook.com/hdnbayhien" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                            <a href="https://www.youtube.com/@hoidoanhnghiepphuongbayhien" target="_blank" rel="noopener noreferrer" aria-label="Youtube"><FaYoutube /></a>
                        </div>
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

                            <div className="mobile-only">
                                <NavLink to="/" className="mobile-home">
                                    <FaHome /> Trang chủ
                                </NavLink>

                                <div className="divider"></div>
                                {/* GIỚI THIỆU */}
                                <div className={`mobile-group ${mobileDropdown === "about" ? "open" : ""}`}>
                                    <button onClick={() => toggleMobileDropdown("about")}>
                                        <FaInfoCircle /> Giới thiệu
                                        <span className="arrow">▾</span>
                                    </button>
                                    <div className="mobile-submenu">
                                        <NavLink to="/gioi-thieu/lich-su">Lịch sử & Sứ mệnh</NavLink>
                                        <NavLink to="/gioi-thieu/co-cau">Cơ cấu tổ chức</NavLink>
                                        <NavLink to="/gioi-thieu/dieu-le">Điều lệ & Điều kiện</NavLink>
                                    </div>
                                </div>

                                {/* HỘI VIÊN */}
                                <div className={`mobile-group ${mobileDropdown === "member" ? "open" : ""}`}>
                                    <button onClick={() => toggleMobileDropdown("member")}>
                                        <FaUsers /> Hội viên
                                        <span className="arrow">▾</span>
                                    </button>
                                    <div className="mobile-submenu">
                                        <NavLink to="/hoi-vien/danh-ba">Danh bạ doanh nghiệp</NavLink>
                                        <NavLink to="/hoi-vien/dang-ky">Đăng ký hội viên</NavLink>
                                        <NavLink to="/hoi-vien/quan-ly">Quản lý hội viên</NavLink>
                                    </div>
                                </div>

                                {/* TIN TỨC */}
                                <div className={`mobile-group ${mobileDropdown === "news" ? "open" : ""}`}>
                                    <button onClick={() => toggleMobileDropdown("news")}>
                                        <FaNewspaper /> Tin tức & Hoạt động
                                        <span className="arrow">▾</span>
                                    </button>
                                    <div className="mobile-submenu">
                                        <NavLink to="/tin-tuc/hoi">Hoạt động Hội</NavLink>
                                        <NavLink to="/tin-tuc/hoi-vien">Hoạt động Hội viên</NavLink>
                                        <NavLink to="/tin-tuc/chuyen-nganh">Tin chuyên ngành</NavLink>
                                    </div>
                                </div>

                                {/* XÚC TIẾN */}
                                <div className={`mobile-group ${mobileDropdown === "trade" ? "open" : ""}`}>
                                    <button onClick={() => toggleMobileDropdown("trade")}>
                                        <FaChartLine /> Xúc tiến thương mại
                                        <span className="arrow">▾</span>
                                    </button>
                                    <div className="mobile-submenu">
                                        <NavLink to="/xuc-tien/gian-hang">Gian hàng hội viên</NavLink>
                                        <NavLink to="/xuc-tien/b2b">Kết nối giao thương (B2B)</NavLink>
                                    </div>
                                </div>

                                <div className="divider"></div>
                            </div>

                            <NavLink to="/tuyen-dung"><FaBriefcase /> Tuyển dụng</NavLink>
                            <NavLink to="/su-kien"><FaCalendarAlt /> Sự kiện</NavLink>
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
