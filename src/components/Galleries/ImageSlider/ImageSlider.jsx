import styles from "./ImageSlider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState, useEffect, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function ImageSlider({ className = "", id, slides = [] }) {
  const [isOpen, setIsOpen] = useState(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Initialize navigation after swiper & refs exist
  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.destroy(); // safe destroy if already initialized
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiperRef.current, prevRef.current, nextRef.current]);

  const lightboxSlides = slides.map((slide) => ({
    src: slide.src,
    title: slide.caption,
  }));

  return (
    <div id={id} className={`${styles.sliderContainer} ${className}`.trim()}>
      <Lightbox
        open={isOpen !== null}
        close={() => setIsOpen(null)}
        slides={lightboxSlides}
        index={isOpen || 0}
        controller={{
          closeOnBackdropClick: true,
          closeOnPullDown: true,
        }}
      />
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={2}
        breakpoints={{
          1024: { slidesPerView: 2, spaceBetween: 40 },
          0: { slidesPerView: 1, spaceBetween: 15 },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {slides.map((image, i) => {
          return (
            <SwiperSlide>
              <div key={i} className={styles.slideItem}>
                <div className={styles.sliderImageContainer}>
                  <img className={styles.sliderImage} src={image.src} alt="Team Photo" loading="lazy" />
                  {image.credit && (
                    <div className={styles.descriptionButton} onClick={() => setIsOpen(i)}>
                      {image.credit}
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.sliderButtonWrapper}>
        <button ref={prevRef} className={`${styles.prevArrow} ${isBeginning ? styles.disabled : ""}`}>
          <IoIosArrowBack size="16px" />
        </button>

        <button ref={nextRef} className={`${styles.nextArrow} ${isEnd ? styles.disabled : ""}`}>
          <IoIosArrowForward size="16px" />
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
