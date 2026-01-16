import "./Trade.css";
import { FaChartLine, FaStore, FaHandshake } from "react-icons/fa";

const Trade = () => {
    return (
        <section className="trade">
            <div className="container">
                <div className="section-title">
                    <h2><FaChartLine /> Xúc tiến thương mại</h2>
                    <p>Kết nối – quảng bá – mở rộng thị trường</p>
                </div>

                <div className="trade-grid">
                    <div className="trade-item">
                        <FaStore />
                        <h3>Gian hàng hội viên</h3>
                        <p>Giới thiệu sản phẩm & dịch vụ của hội viên</p>
                    </div>

                    <div className="trade-item">
                        <FaHandshake />
                        <h3>Kết nối giao thương (B2B)</h3>
                        <p>Hợp tác, tìm đối tác trong & ngoài Hội</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trade;
