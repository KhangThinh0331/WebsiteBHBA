import "./Gallery.css";
import { FaImages } from "react-icons/fa";
import gallery1 from "../../../../assets/images/gallery1.jpg";
import gallery2 from "../../../../assets/images/gallery2.jpg";
import gallery3 from "../../../../assets/images/gallery3.jpg";
import gallery4 from "../../../../assets/images/gallery4.jpg";
import gallery5 from "../../../../assets/images/gallery5.jpg";
import gallery6 from "../../../../assets/images/gallery6.jpg";
import gallery7 from "../../../../assets/images/gallery7.jpg";
import gallery8 from "../../../../assets/images/gallery8.jpg";
import gallery9 from "../../../../assets/images/gallery9.jpg";
import gallery10 from "../../../../assets/images/gallery10.jpg";

const GalleryItems = [
    { src: gallery1, alt: "Gallery Image 1" },
    { src: gallery2, alt: "Gallery Image 2" },
    { src: gallery3, alt: "Gallery Image 3" },
    { src: gallery4, alt: "Gallery Image 4" },
    { src: gallery5, alt: "Gallery Image 5" },
    { src: gallery6, alt: "Gallery Image 6" },
    { src: gallery7, alt: "Gallery Image 7" },
    { src: gallery8, alt: "Gallery Image 8" },
    { src: gallery9, alt: "Gallery Image 9" },
    { src: gallery10, alt: "Gallery Image 10" },
];

const Gallery = () => {
    return (
        <section className="gallery">
            <div className="container">
                <div className="section-title">
                    <h2><FaImages /> Thư viện</h2>
                    <p>Hình ảnh hoạt động & sự kiện nổi bật</p>
                </div>

                <div className="gallery-grid">
                    {GalleryItems.map((item, index) => (
                        <div key={index} className="gallery-item">
                            <img
                                src={item.src}
                                alt={item.alt}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
