import "./Overview.css";
import overviewImg from "../../../../assets/images/overview.jpg";

const Overview = () => {
    return (
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
    );
}

export default Overview;