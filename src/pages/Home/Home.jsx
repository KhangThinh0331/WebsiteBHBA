import "./Home.css";
import Overview from "./components/Overview/Overview";
import News from "./components/News/News";
import Events from "./components/UpcomingEvents/Events";
import Partners from "./components/Partners/Partners";
import Carousel from "./components/Carousel/Carousel";
import Members from "./components/Members/Members";
import Trade from "./components/Trade/Trade";
import { lazy, Suspense } from "react";

const Gallery = lazy(() => import("./components/Gallery/Gallery"));

const Home = () => {
    return (
        <div className="home">
            <Carousel />
            {/* ===== Tổng quan ===== */}
            <Overview />
            <Members />

            {/* ===== Tin nổi bật ===== */}
            <News />
            <Trade />
            {/* ===== Sự kiện ===== */}
            <Events />
            <Suspense fallback={<div className="gallery-skeleton">Đang tải thư viện...</div>}>
                <Gallery />
            </Suspense>
            {/* ===== Đối tác ===== */}
            <Partners />

        </div>
    );
};

export default Home;
