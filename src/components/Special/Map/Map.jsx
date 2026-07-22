import styles from "./Map.module.scss";
import { mapData } from "@/data/map";

function Map({ className = "", id }) {
  const { lat, lng, zoom } = mapData;

  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

  return (
    <div id={id} className={`${styles.mapContainer} ${className}`.trim()}>
      <div className={styles.map}>
        <iframe title="map" src={mapSrc} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  );
}

export default Map;
