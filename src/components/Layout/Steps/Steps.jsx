import styles from "./Steps.module.scss";

function LandingSteps({ className = "", id, steps = [] }) {
  const defaultSteps = [
    { title: "Title", description: "Description" },
    { title: "Title", description: "Description" },
    { title: "Title", description: "Description" },
  ];

  // Use passed props, otherwise fall back to defaults
  const dataToDisplay = steps.length > 0 ? steps : defaultSteps;

  return (
    <section id={id} className={`${styles.stepsSection} ${className}`.trim()}>
      <div className={styles.stepsContainer}>
        {dataToDisplay.map((item, index) => (
          <div key={index} className={styles.stepBox}>
            <span className={styles.stepNumber}>{index + 1}</span>

            <div className={styles.stepContent}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LandingSteps;
