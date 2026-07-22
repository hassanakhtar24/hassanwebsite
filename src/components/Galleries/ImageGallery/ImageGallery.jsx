import styles from "./ImageGallery.module.scss";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { FaMagnifyingGlass } from "react-icons/fa6";

function ImageGallery({ className = "", id, images = [] }) {
  const [openIndex, setOpenIndex] = useState(null);
  // make a flat array of slides
  const slides = images.map((item) => ({ src: item }));

  return (
    <div id={id} className={`${styles.galleryContainer} ${className}`.trim()}>
      <Lightbox
        open={openIndex !== null}
        close={() => setOpenIndex(null)}
        slides={slides} // full gallery
        index={openIndex || 0}
        controller={{ closeOnBackdropClick: true, closeOnPullDown: true }}
      />
      {images.map((item, index) => (
        <div key={index} className={styles.galleryItem}>
          <img src={item} alt={`Image ${index + 1}`} loading="lazy" />
          <div className={styles.hoverOverlay} onClick={() => setOpenIndex(index)}>
            <div className={styles.buttonCircle}>
              <div>
                <FaMagnifyingGlass size={20} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
