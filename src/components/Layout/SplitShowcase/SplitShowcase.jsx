import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

import Waves from "@/components/UI/Waves/Waves";
import styles from "./SplitShowcase.module.scss";

function SplitShowcase({ id, className = "", reverse = false, waves = true, slides = [], features = [] }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

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

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.33,
  });

  const swiper = (
    <Swiper modules={[Navigation]} speed={800} slidesPerView={1} loop={true} onSwiper={(swiper) => (swiperRef.current = swiper)}>
      {slides.map((image, i) => (
        <SwiperSlide key={i}>
          <div className={styles.slideItem}>
            <div className={styles.sliderImageContainer}>
              <img className={styles.sliderImage} src={image} alt={`Photo #${i}`} loading="lazy" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <div id={id} className={`${styles.splitSection} ${className}${reverse ? styles.reverse : ""}`.trim()}>
      <div className={styles.leftSide}>
        {waves ? <Waves>{swiper}</Waves> : swiper}
        <div className={styles.sliderButtonWrapper}>
          <button ref={prevRef} className={styles.prevArrow}>
            <IoIosArrowBack size="16px" />
          </button>

          <button ref={nextRef} className={styles.nextArrow}>
            <IoIosArrowForward size="16px" />
          </button>
        </div>
      </div>

      {/* Right Side: Content */}
      <div className={styles.rightSide} ref={ref}>
        <div className={styles.rightContent}>
          {features.map((item, id) => (
            <div key={id} className={styles.featureItem}>
              <div className={styles.featureHeader}>
                <span className={styles.featureName}>{item.name}</span>
                <span className={styles.featurePercentage}>
                  <CountUp end={item.number} duration={3} enableScrollSpy scrollSpyOnce />%
                </span>
              </div>
              <div className={`${styles.animatedLine} ${inView ? styles.active : ""}`} style={{ "--target-width": `${item.number}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SplitShowcase;
