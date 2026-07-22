import styles from "./Quote.module.scss";
import { BsQuote } from "react-icons/bs";

function Quote({ className = "", id, text = "" }) {
  return (
    <div id={id} className={`${styles.quoteContainer} ${className}`.trim()}>
      <div className={styles.quote}>
        <p className={styles.description}>
          {text}
          <span className={styles.quoteIcon}>
            <BsQuote />
          </span>
        </p>
      </div>
    </div>
  );
}

export default Quote;
