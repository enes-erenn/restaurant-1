import React from "react";
import SubHeading from "../SubHeading";
import styles from "./FindUs.module.scss";

const FindUs = () => {
  return (
    <div className={styles.container}>
      <SubHeading title="Contact" alignImage="center" />
      <h1 className={styles.header}>Find Us</h1>
      <div className={styles.info}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa alias
          minus quod ratione quo quasi facilis quae tenetur fugiat dolores eum
          ex, praesentium quisquam iste sint. Officia dolorum neque rerum.
        </p>
        <h3 className={styles.title}>Opening Hours</h3>
        <div className={styles.hours}>
          <span>Mon - Fri 10:00 AM - 02:00 AM</span>
          <span>Sat - Sun 11:00 AM - 03:00 AM</span>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
