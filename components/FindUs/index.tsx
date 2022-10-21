import React from "react";
import SubHeading from "../SubHeading";
import GoogleMaps from "./GoogleMaps";
import styles from "./FindUs.module.scss";

const FindUs = () => {
  return (
    <div className={styles.container}>
      <SubHeading title="Contact" alignImage="center" />
      <h1 className={styles.header}>Find Us</h1>
      <div className={styles.info}>
        <p style={{ textAlign: "center" }}>
          9W 55rd St. New York, NY 10012, USA
        </p>
        <h3 className={styles.title}>Opening Hours</h3>
        <div className={styles.hours}>
          <span>Mon - Fri 10:00 AM - 02:00 AM</span>
          <span>Sat - Sun 11:00 AM - 03:00 AM</span>
        </div>
      </div>
      <div className={styles.googleMap}>
        <GoogleMaps coords={{ lat: 40.712776, lng: -74.005974 } as any} />
      </div>
    </div>
  );
};

export default FindUs;
