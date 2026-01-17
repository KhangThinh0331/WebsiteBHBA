import "./Gallery.css";
import { FaImages } from "react-icons/fa";

const GalleryItems = [
    { src: `${import.meta.env.BASE_URL}images/gallery1.JPG`, alt: "Gallery Image 1" },
    { src: `${import.meta.env.BASE_URL}images/gallery2.JPG`, alt: "Gallery Image 2" },
    { src: `${import.meta.env.BASE_URL}images/gallery3.JPG`, alt: "Gallery Image 3" },
    { src: `${import.meta.env.BASE_URL}images/gallery4.JPG`, alt: "Gallery Image 4" },
    { src: `${import.meta.env.BASE_URL}images/gallery5.JPG`, alt: "Gallery Image 5" },
    { src: `${import.meta.env.BASE_URL}images/gallery6.JPG`, alt: "Gallery Image 6" },
    { src: `${import.meta.env.BASE_URL}images/gallery7.JPG`, alt: "Gallery Image 7" },
    { src: `${import.meta.env.BASE_URL}images/gallery8.JPG`, alt: "Gallery Image 8" },
    { src: `${import.meta.env.BASE_URL}images/gallery9.JPG`, alt: "Gallery Image 9" },
    { src: `${import.meta.env.BASE_URL}images/gallery10.JPG`, alt: "Gallery Image 10" },
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
