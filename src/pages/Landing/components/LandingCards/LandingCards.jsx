import styles from "./LandingCards.module.scss";
import { Link } from "react-router-dom";
import AnimatedButton from "@/components/UI/AnimatedButton/AnimatedButton";

function LandingCards({ className = "", id, demos = [] }) {
  return (
    <div id={id} className={`${styles.cardContainer} ${className}`.trim()}>
      {demos.map((demo) => (
        <Link key={demo.id} to={demo.path} className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={demo.img} alt={demo.name} loading="lazy" />

            <div className={styles.overlay}>
              <AnimatedButton text="Live Preview" color="#fff" />
            </div>
          </div>
          <div className={styles.cardInfo}>
            <h3>{demo.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default LandingCards;
