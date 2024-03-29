import React from "react";
import Image from "next/image";
import SubHeading from "../SubHeading";
import AwardCard from "./AwardCard";
import { awards } from "../../data";
import styles from "./Laurels.module.scss";

const Laurels = () => {
  return (
    <div className={styles.container} id="awards">
      <div className={styles.info} data-aos="zoom-out-up">
        <SubHeading title="Awards & Recognition" alignImage="center" />
        <h1 className={styles.header}>Our Laurels</h1>
      </div>
      <div className={styles.awards}>
        {awards.map((item) => (
          <AwardCard award={item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Laurels;
