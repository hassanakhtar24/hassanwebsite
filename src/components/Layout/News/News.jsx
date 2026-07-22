import { useState } from "react";
import { Modal, Container } from "react-bootstrap";
import AnimatedButton from "@/components/UI/AnimatedButton/AnimatedButton";
import { newsData } from "@/data/news";
import ImageSlider from "@/components/Galleries/ImageSlider/ImageSlider";
import styles from "./News.module.scss";
import BlockQuote from "@/components/UI/BlockQuote/BlockQuote";
import Section from "@/components/Common/Section/Section";

function News({ className = "", id, isDark = false }) {
  const [show, setShow] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  const handleOpen = (item) => {
    setSelectedNews(item);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    // clear data
    setTimeout(() => setSelectedNews(null), 300);
  };

  return (
    <div id={id} className={`${styles.newsContainer} ${className}`.trim()}>
      <div className={styles.newsList}>
        {newsData.map((item) => (
          <div key={item.id} className={styles.newsCard}>
            <img src={item.slides[0].src} alt={item.title} className={styles.cardBackground} loading="lazy" />
            <div className={styles.cardOverlay}></div>

            <span className={styles.date}>{item.date}</span>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.shortDesc}>{item.shortDescription}</p>
            <button type="button" className={styles.readMoreBtn} onClick={() => handleOpen(item)}>
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* React Bootstrap Modal */}
      <Modal show={show} onHide={handleClose} fullscreen centered>
        <Modal.Body className={styles.modalBody} data-theme={isDark ? "dark" : undefined}>
          <Container className={styles.modalContent}>
            {selectedNews && (
              <div className={styles.modalContentWrapper}>
                <Section className={styles.modalSection}>
                  <span className={styles.modalDate}>{selectedNews.date}</span>
                  <h1 className={styles.modalTitle}>{selectedNews.title}</h1>

                  <p className={styles.modalLongDesc}>{selectedNews.descriptionLong1}</p>
                </Section>

                {/* Image Slider */}
                {selectedNews.slides && selectedNews.slides.length > 0 && <ImageSlider slides={selectedNews.slides} className={styles.modalSlider} />}

                <Section className={styles.modalSection}>
                  <p className={styles.modalLongDesc}>{selectedNews.descriptionLong2}</p>

                  <BlockQuote className={styles.quote} text={selectedNews.quote}></BlockQuote>

                  <p className={styles.modalLongDesc}>{selectedNews.descriptionLong3}</p>
                </Section>
                <AnimatedButton onClick={handleClose} text="Close" color="var(--color-font-primary)" />
              </div>
            )}
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default News;
