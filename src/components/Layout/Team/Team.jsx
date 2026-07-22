import styles from "./Team.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState, useEffect, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";

import { teamData } from "@/data/team";

function Team({ className = "", id, slides = teamData }) {
  const [openIndex, setOpenIndex] = useState(null);
  // make an array of slides
  const lightboxSlides = teamData.map((item) => ({ src: item.image }));

  // Normalize the data so the the component doesn't break
  const normalizedSlides = slides.map((item) => {
    if (typeof item === "string") {
      return { image: item, name: "", role: "" };
    }
    return item;
  });

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

  return (
    <div id={id} className={`${styles.teamContainer} ${className}`.trim()}>
      <Lightbox
        open={openIndex !== null}
        close={() => setOpenIndex(null)}
        slides={lightboxSlides} // full gallery
        index={openIndex || 0} // start at the clicked image
        controller={{
          closeOnBackdropClick: true,
          closeOnPullDown: true,
        }}
      />
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
          1440: { slidesPerView: 3, spaceBetween: 40 },
          1024: { slidesPerView: 2, spaceBetween: 40 },
          880: { slidesPerView: 2, spaceBetween: 40 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          0: { slidesPerView: 1, spaceBetween: 15 },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {normalizedSlides.map((member, i) => {
          return (
            <SwiperSlide>
              <div key={i} className={styles.teamWrapper}>
                <div className={styles.teamImageContainer}>
                  <img className={styles.teamImage} src={member.image} alt="Team Photo" loading="lazy" />

                  {/* Hover overlay */}
                  <div className={styles.hoverOverlay}>
                    <div className={styles.buttonCircle}>
                      <button onClick={() => setOpenIndex(i)}>
                        <FaMagnifyingGlass size={16} />
                      </button>
                    </div>
                  </div>
                  {member.name && member.role && (
                    <div className={styles.teamText} onClick={() => setOpenIndex(i)}>
                      {member.name}
                      <span>{member.role}</span>
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

export default Team;
