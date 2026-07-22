import styles from "./Testimonials.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { useState } from "react";
import FsLightbox from "fslightbox-react";

import AnimatedButton from "@/components/UI/AnimatedButton/AnimatedButton";
import { BsQuote } from "react-icons/bs";

function Testimonials({ className = "", id, media = "", buttonLink = "#", testimonials = [] }) {
  const isVideo = media.endsWith(".mp4") || media.endsWith(".mkv") || media.endsWith(".mov");

  const [toggler, setToggler] = useState(false);

  return (
    <div id={id} className={`${styles.parallaxWrapper} ${className}`.trim()}>
      {isVideo ? (
        <video className={styles.backgroundMedia} src={media} autoPlay loop muted playsInline />
      ) : (
        <img src={media} className={styles.backgroundMedia} alt="Testimonial Image" loading="lazy" />
      )}

      <div className={styles.overlay}>
        <div className={styles.slideContainer}>
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <blockquote className={styles.slideText}>
                  {testimonial}
                  <span className={styles.quoteIcon}>
                    <BsQuote />
                  </span>
                </blockquote>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <AnimatedButton text="Watch Video" onClick={() => setToggler(!toggler)} color="var(--text-inverse)" />
        <FsLightbox toggler={toggler} sources={[buttonLink]} />
      </div>
    </div>
  );
}

export default Testimonials;
