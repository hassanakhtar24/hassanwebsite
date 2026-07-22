import styles from "./ToTopArrow.module.scss";
import { IoIosArrowUp } from "react-icons/io";
import { useScrollEffect } from "@/utils/useScrollEffect";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function ToTopArrow({ className = "" }) {
  const isVisible = useScrollEffect(50);
  return (
    <div className={className}>
      <button className={`${styles.toTopArrow} ${isVisible ? styles.show : ""}`} onClick={scrollToTop}>
        <IoIosArrowUp size={16} />
      </button>
    </div>
  );
}

export default ToTopArrow;
