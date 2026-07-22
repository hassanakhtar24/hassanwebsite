import styles from "./Section.module.scss";

function Section({ children, id, className = "", background = "transparent", fluid = false }) {
  return (
    <section id={id} className={`${styles.section} ${className}`} style={{ background: background }}>
      <div className={`${styles.container} ${fluid ? styles.fluid : ""}`}>{children}</div>
    </section>
  );
}

export default Section;
