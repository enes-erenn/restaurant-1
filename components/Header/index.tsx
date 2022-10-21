import Image from "next/image";
import React from "react";
import SubHeading from "../SubHeading";
import BBQ from "../../assets/images/bbq.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <SubHeading title="Chase the new flavour" alignImage="start" />
        <h1 className={styles.header}>The Key to Fine Dining</h1>
        <p className={styles.description}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters,
        </p>
      </div>
      <div
        className={styles.image}
        style={{ position: "relative", width: "60%", height: "auto" }}
      >
        <Image src={BBQ} alt="BBQ" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Header;
