import { Link } from "react-router-dom";
import styles from "./AnimatedButton.module.scss";

function AnimatedButton({ className = "", text = "Button Text", onClick = () => {}, href = "", color = "var(--text-inverse)", newTab = false }) {
  // Check if link is external
  const isStandardAnchor = href && (href.startsWith("http") || href.startsWith("#") || newTab);

  const content = (
    <span className={styles.buttonText} style={{ "--btn-color": color }}>
      {text}
    </span>
  );

  return (
    <div className={`${styles.textButtonWrapper} ${className}`.trim()}>
      {href ? (
        isStandardAnchor ? (
          /* Use <a> for external or newTab links */
          <a
            href={href}
            target={newTab ? "_blank" : undefined}
            rel={newTab ? "noopener noreferrer" : undefined}
            className={styles.button}
            style={{ "--btn-color": color }}
          >
            {content}
          </a>
        ) : (
          /* Use router for internal links */
          <Link to={href} className={styles.button} style={{ "--btn-color": color }}>
            {content}
          </Link>
        )
      ) : (
        <button onClick={onClick} className={styles.button} style={{ "--btn-color": color }}>
          {content}
        </button>
      )}
    </div>
  );
}

export default AnimatedButton;
