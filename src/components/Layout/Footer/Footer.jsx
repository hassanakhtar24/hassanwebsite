import styles from "./Footer.module.scss";

import { socialMediaLinks } from "@/data/footer";
import { logo } from "@/data/logo";

import Section from "@/components/Common/Section/Section";

function Footer({ className = "", id, isDark = false }) {
  return (
    <>
      <footer id={id} className={`${styles.footerContainer} ${className}`.trim()}>
        <div className={styles.linksContainer}>
          <a href="#">
            <img src={isDark ? logo.light : logo.dark} alt="Logo Image" />
          </a>

          <Section>
            <div className={styles.socialMedia}>
              {socialMediaLinks.map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </Section>

          <p>&copy; All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
