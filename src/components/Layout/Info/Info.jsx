import styles from "./Info.module.scss";

function Info({ className = "", id, number = "", topTitle = "", title = "" }) {
  return (
    <div id={id} className={className}>
      <div className={styles.infoContainer}>
        <div className={styles.topText}>
          {number && <span>{number}</span>}
          {number && topTitle && <hr />}
          {topTitle && <span>{topTitle}</span>}
        </div>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Info;
