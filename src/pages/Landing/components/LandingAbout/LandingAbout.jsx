import styles from "./LandingAbout.module.scss";

function LandingAbout({ className = "", id, title, subtitle, description }) {
  return (
    <div className={`${styles.aboutSection} ${className}`.trim()} id={id}>
      {title && <h2>{title}</h2>}
      {subtitle && (
        <h3>
          {subtitle} <hr />
        </h3>
      )}
      {description && <p>{description}</p>}
    </div>
  );
}

export default LandingAbout;
