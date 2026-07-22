import styles from "./LandingPromo.module.scss";
import AnimatedButton from "@/components/UI/AnimatedButton/AnimatedButton";

function LandingPromo({ className = "", id, link, image, topText, title, subtitle }) {
  return (
    <div id={id} className={`${styles.promoContainer} ${className}`.trim()}>
      <img src={image} alt={title} />
      <div className={styles.textContainer}>
        <h1>{topText}</h1>
        <h2>{title}</h2>
        <span className={styles.subtitle}>
          {subtitle} <hr />
        </span>
        <AnimatedButton text="Purchase" color="#fff" href={link} newTab={true} />
      </div>
    </div>
  );
}

export default LandingPromo;
