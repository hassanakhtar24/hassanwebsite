import styles from "./AboutUs.module.scss";
import Info from "@/components/Layout/Info/Info";
import Quote from "@/components/UI/Quote/Quote";
import Section from "@/components/Common/Section/Section";

function AboutUs({
  className = "",
  id,
  number = "",
  topTitle = "",
  title = "",
  quote = "",
  missionDescription = "",
  visionDescription = "",
  imagesLeft = [],
  imagesRight = [],
}) {
  return (
    <section id={id} className={`${styles.aboutContainer} ${className}`.trim()}>
      {/* Center Content */}
      <Section className={styles.aboutSection}>
        <div className={styles.contentContainer}>
          <Info number={number} topTitle={topTitle} title={title} />
          {quote && <Quote text={quote} className={styles.quote} />}

          <div className={styles.textContainer}>
            <div className={styles.textBlock}>
              <h4 className={styles.textTitle}>
                <span>Brand</span> Mission
              </h4>
              <p className={styles.textContent}>{missionDescription}</p>
            </div>
            <div className={styles.textBlock}>
              <h4 className={styles.textTitle}>
                <span>Brand</span> Vision
              </h4>
              <p className={styles.textContent}>{visionDescription}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Left Images */}
      {imagesLeft.length > 0 && (
        <div className={`${styles.imageGrid} ${styles.left}`}>
          {/* Column 1: 3 Images */}
          <div className={styles.imageColumn}>
            {imagesLeft.slice(0, 3).map((img, idx) => (
              <div key={`col1-${idx}`}>
                <img src={img} alt={`Image ${idx}`} className={styles.brandImage} loading="lazy" />
              </div>
            ))}
          </div>

          {/* Column 2: 2 Images */}
          <div className={styles.imageColumn}>
            {imagesLeft.slice(3, 5).map((img, idx) => (
              <div key={`col2-${idx}`}>
                <img src={img} alt={`Image ${idx}`} className={styles.brandImage} loading="lazy" />
              </div>
            ))}
          </div>

          {/* Column 3: 1 Image */}
          <div className={styles.imageColumn}>
            {imagesLeft.slice(5, 6).map((img, idx) => (
              <div key={`col3-${idx}`}>
                <img src={img} alt={`Image ${idx}`} className={styles.brandImage} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Right Images */}
      {imagesRight.length > 0 && (
        <div className={styles.imageGrid}>
          {/* Column 1: 3 Images */}
          <div className={styles.imageColumn}>
            {imagesRight.slice(0, 3).map((img, idx) => (
              <div key={`col1-${idx}`}>
                <img src={img} alt={`Image ${idx}`} className={styles.brandImage} loading="lazy" />
              </div>
            ))}
          </div>

          {/* Column 2: 2 Images */}
          <div className={styles.imageColumn}>
            {imagesRight.slice(3, 5).map((img, idx) => (
              <div key={`col2-${idx}`}>
                <img src={img} alt={`Image ${idx}`} className={styles.brandImage} loading="lazy" />
              </div>
            ))}
          </div>

          {/* Column 3: 1 Image */}
          <div className={styles.imageColumn}>
            {imagesRight.slice(5, 6).map((img, idx) => (
              <div key={`col3-${idx}`}>
                <img src={img} alt={`Image ${idx}`} className={styles.brandImage} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default AboutUs;
