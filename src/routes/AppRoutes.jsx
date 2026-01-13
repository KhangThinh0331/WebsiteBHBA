import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gioi-thieu" element={<div>Giới thiệu</div>} />
            <Route path="/hoi-vien" element={<div>Hội viên</div>} />
            <Route path="/tin-tuc" element={<div>Tin tức</div>} />
            <Route path="/xuc-tien" element={<div>Xúc tiến thương mại</div>} />
            <Route path="/tuyen-dung" element={<div>Tuyển dụng</div>} />
            <Route path="/su-kien" element={<div>Sự kiện</div>} />
            <Route path="/thu-vien" element={<div>Thư viện</div>} />
            <Route path="/lien-he" element={<div>Liên hệ</div>} />
        </Routes>
    );
};

export default AppRoutes;
