import styles from "./LandingSeparator.module.scss";

function LandingSeparator({ className = "", id, color = "var(--text-main)" }) {
  return (
    <>
      <div id={id} className={`${styles.lineContainer} ${className}`.trim()}>
        <div className={styles.line} style={{ backgroundColor: color }}></div>
      </div>
    </>
  );
}

export default LandingSeparator;
