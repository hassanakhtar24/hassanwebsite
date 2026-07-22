import styles from "./Counter.module.scss";
import CountUp from "react-countup";

function Counter({ className = "", id, title = "", number = 0, subTitle = "" }) {
  return (
    <div id={id} className={`${styles.counterContainer} ${className}`.trim()}>
      <div className={styles.circle}>
        <h3 className={styles.sizeText}>{title}</h3>
        <h1 className={styles.sizeNumber}>
          <CountUp end={number} duration={3} enableScrollSpy scrollSpyOnce />
        </h1>
        <h3 className={styles.sizeText}>{subTitle}</h3>
      </div>
    </div>
  );
}

export default Counter;
