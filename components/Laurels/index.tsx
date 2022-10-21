import React from "react";
import Image from "next/image";
import SubHeading from "../SubHeading";
import AwardCard from "./AwardCard";
import { awards } from "../../data";
import styles from "./Laurels.module.scss";

const Laurels = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <SubHeading title="Awards & recognition" alignImage="center" />
        <h1 className={styles.header}>Our Laurels</h1>
      </div>
      <div className={styles.awards}>
        {awards.map((item) => (
          <AwardCard award={item} key={item.title} />
        ))}
      </div>
      <div>
        <Image src="" alt="" />
      </div>
    </div>
  );
};

export default Laurels;
