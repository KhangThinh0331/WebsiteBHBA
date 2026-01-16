import "./Home.css";
import Overview from "./components/Overview/Overview";
import News from "./components/News/News";
import Events from "./components/UpcomingEvents/Events";
import Partners from "./components/Partners/Partners";
import Carousel from "./components/Carousel/Carousel";
import Members from "./components/Members/Members";
import Trade from "./components/Trade/Trade";
import Gallery from "./components/Gallery/Gallery";
import { useEffect, useRef, useState } from "react";

const Home = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setVisible(true),
            { rootMargin: "200px" }
        );
        obs.observe(ref.current);
    }, []);
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
            <div ref={ref}>
                {visible && <Gallery />}
            </div>
            {/* ===== Đối tác ===== */}
            <Partners />

        </div>
    );
};

export default Home;
