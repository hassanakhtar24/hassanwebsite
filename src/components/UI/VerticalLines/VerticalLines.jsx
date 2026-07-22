import styles from "./VerticalLines.module.scss";

function VerticalLines({ className = "" }) {
  return (
    <div className={`${styles.verticalLinesWrapper} ${className}`}>
      <div className={styles.verticalLines}>
        <div className={styles.verticalLinesWrapper}>
          <div className={styles.verticalEffect}></div>
          <div className={styles.verticalEffect}></div>
          <div className={styles.verticalEffect}></div>
        </div>
      </div>
      <div className={styles.verticalEffect}></div>
      <div className={styles.verticalEffect}></div>
      <div className={styles.verticalEffect}></div>
    </div>
  );
}

export default VerticalLines;
