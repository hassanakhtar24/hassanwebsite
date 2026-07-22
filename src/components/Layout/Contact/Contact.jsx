import styles from "./Contact.module.scss";
import ContactForm from "@/components/Layout/ContactForm/ContactForm";
import Info from "@/components/Layout/Info/Info";
import Section from "@/components/Common/Section/Section";

function Contact({ id, className = "", image, number, topTitle, title, isDark = false }) {
  return (
    <div id={id} className={`${styles.contactContainer} ${className}`.trim()}>
      <img src={image} alt={title} />
      <div className={styles.contactContent}>
        <Info className={styles.info} number={number} topTitle={topTitle} title={title} />
        <Section className={styles.contactSection}>
          <ContactForm isDark={isDark} />
        </Section>
      </div>
    </div>
  );
}

export default Contact;
