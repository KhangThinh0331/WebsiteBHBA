import "./Gallery.css";
import { FaImages } from "react-icons/fa";

const GalleryItems = [
    { src: "/images/gallery1.JPG", alt: "Gallery Image 1" },
    { src: "/images/gallery2.JPG", alt: "Gallery Image 2" },
    { src: "/images/gallery3.JPG", alt: "Gallery Image 3" },
    { src: "/images/gallery4.JPG", alt: "Gallery Image 4" },
    { src: "/images/gallery5.JPG", alt: "Gallery Image 5" },
    { src: "/images/gallery6.JPG", alt: "Gallery Image 6" },
    { src: "/images/gallery7.JPG", alt: "Gallery Image 7" },
    { src: "/images/gallery8.JPG", alt: "Gallery Image 8" },
    { src: "/images/gallery9.JPG", alt: "Gallery Image 9" },
    { src: "/images/gallery10.JPG", alt: "Gallery Image 10" },
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
