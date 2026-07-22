import styles from "./LandingHero.module.scss";
import { GoStarFill } from "react-icons/go";
import { scrollToId } from "@/utils/scrollToId.js";
import FsLightbox from "fslightbox-react";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  const isScrollLink = link?.startsWith("#");

  const handleLinkClick = (e) => {
    if (isVideo) {
      e.preventDefault();
      setToggler(!toggler); // Open the video modal
    } else if (isScrollLink) {
      e.preventDefault();
      const targetId = link.replace("#", "");
      if (typeof scrollToId === "function") {
        scrollToId(targetId);
      }
    }
  };

  return (
    <div className={styles.heroContent}>
      <div>
        <span>{top}</span>
        <h1>{title}</h1>

        {link && btnText && (
          <>
            {isVideo || isScrollLink ? (
              <a href={link} onClick={handleLinkClick} className={styles.customButton}>
                <AnimatedButton text="Live Demos" color="#fff" />
              </a>
            ) : (
              /* Normal page link */
              <Link to={link} className={styles.customButton}>
                <AnimatedButton text="Live Demos" color="#fff" />
              </Link>
            )}

            {/* Add the video lightbox */}
            {isVideo && <FsLightbox toggler={toggler} sources={[link]} />}
          </>
        )}
      </div>
    </div>
  );
}

function Hero({ className = "", id, slides = [] }) {
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

export default Hero;
