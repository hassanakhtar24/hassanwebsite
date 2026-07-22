import styles from "./Hero.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Parallax, Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward, IoMdPlay, IoMdPause } from "react-icons/io";
import FsLightbox from "fslightbox-react";

import { useState, useRef } from "react";
import AnimatedButton from "@/components/UI/AnimatedButton/AnimatedButton";

function HeroMedia({ media, title }) {
  return media.endsWith(".mp4") ? (
    <video className={styles.heroVideo} src={media} autoPlay loop muted playsInline />
  ) : (
    <img className={styles.heroImage} src={media} alt={`${title} Image`} />
  );
}

function HeroContent({ top, title, link, btnText }) {
  const [toggler, setToggler] = useState(false);

  // Check if link is on youtube or vimeo
  const isVideo = link?.includes("youtube.com") || link?.includes("youtu.be") || link?.includes("vimeo.com");

  const handleLinkClick = (e) => {
    if (isVideo) {
      e.preventDefault();
      setToggler(!toggler); // Open the video modal
    }
  };

  return (
    <div className={styles.heroContent}>
      <div>
        <span>
          {top} <hr />
        </span>
        <h1>{title}</h1>
        {link && btnText && (
          <>
            {isVideo && (
              <>
                <a href={link} onClick={handleLinkClick} className={styles.pulseButtonWrapper}>
                  <AnimatedButton text={btnText} color="#fff" />
                </a>
                <FsLightbox toggler={toggler} sources={[link]} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function Hero({ className = "", id, slides = [] }) {
  if (!slides || slides.length === 0) return null;

  const [isPlaying, setIsPlaying] = useState(true);
  const swiperRef = useRef(null);

  const toggleAutoplay = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      if (isPlaying) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Render function to avoid code duplication between single and multi slide
  const renderSlideContent = (item) => (
    <>
      <HeroMedia media={item.media} title={item.title} />
      <HeroContent
        top={item.topText}
        title={item.title}
        link={item.buttonLink} // #section or /link
        btnText={item.buttonText}
      />
    </>
  );

  if (slides.length === 1) {
    return (
      <>
        <div id={id} className={`${styles.mediaContainer} ${styles.mediaContainerSingle} ${className}`.trim()}>
          {renderSlideContent(slides[0], true)}
          <div className={styles.scrollContainer}>
            <div className={styles.scrollWrapper}>
              <div className={styles.scrollLine}></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div id={id} className={`${styles.mediaContainer} ${className}`.trim()}>
        <div className={styles.dots}></div>
        <div className={`${styles.dots} ${styles.reverse}`}></div>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Parallax, Navigation, Pagination, Autoplay]}
          parallax={true}
          navigation={{
            prevEl: `.${styles.slideButtonLeft}`,
            nextEl: `.${styles.slideButtonRight}`,
          }}
          pagination={{
            el: `.${styles.paginationContainer}`,
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
        >
          {slides.map((item, i) => (
            <SwiperSlide className={styles.slide} key={i}>
              {renderSlideContent(item, false)}
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.slideButtonContainer}>
          <button onClick={toggleAutoplay} className={styles.playPauseButton}>
            {isPlaying ? <IoMdPause size="16px" color="black" /> : <IoMdPlay size="16px" color="black" />}
          </button>

          <button className={styles.slideButtonLeft}>
            <IoIosArrowBack size="16px" color="black" />
          </button>

          <button className={styles.slideButtonRight}>
            <IoIosArrowForward size="16px" color="black" />
          </button>
        </div>
        <div className={`${styles.paginationContainer} swiper-pagination`}></div>
      </div>
    </>
  );
}

export default Hero;
