import styles from "./ContactCard.module.scss";
import { contactInfo } from "@/data/contact";

function ContactCard({ className = "", id }) {
  return (
    <>
      <div id={id} className={`${styles.contactContainer} ${className}`.trim()}>
        {contactInfo.map((item, i) => (
          <div className={styles.contactData} key={i}>
            <h3>{item.label}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ContactCard;
