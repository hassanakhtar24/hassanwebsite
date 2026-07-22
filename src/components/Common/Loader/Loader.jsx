import { PuffLoader } from "react-spinners";
import styles from "./Loader.module.scss";

function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <PuffLoader size={50} />
    </div>
  );
}

export default Loader;
