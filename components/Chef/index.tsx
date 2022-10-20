import React from "react";
import Image from "next/image";
import SubHeading from "../SubHeading";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import ChefImage from "../../assets/images/chef.png";
import Signature from "../../assets/images/signature.png";
import styles from "./Chef.module.scss";

const Chef: React.FC = () => {
  return (
    <div className={styles.container}>
      <div
        style={{
          position: "relative",
          width: "90%",
          height: "auto",
        }}
        className={styles.image}
      >
        <Image src={ChefImage} alt="Chef" layout="fill" objectFit="contain" />
      </div>
      <div>
        <div className={styles.word}>
          <SubHeading title="Chef's Word" alignImage="start" />
        </div>
        <h1 className={styles.header}>What We Believe In</h1>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "absolute", left: 0, top: 0 }}>
            <FaQuoteLeft size={36} />
          </div>
          <span style={{ margin: "3rem 0" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, dolor
            facilis. At aliquam nulla ea fugit voluptas doloribus corporis,
            beatae voluptates, nam magnam atque dicta quod illo laborum! Fugiat,
            blanditiis. Fugiat et a, corrupti laborum, rem molestias distinctio
            laboriosam illo, facilis deserunt vitae tempore amet facere totam
            perferendis inventore repellat? Nisi cupiditate nihil eaque rerum a,
            sapiente aliquam illum illo! Vel veniam veritatis saepe repellendus
            autem. Ab quasi eos quod. Repellat, enim doloremque placeat aliquam
            laborum beatae at, eaque, magni minima neque hic tempore natus quod
            suscipit debitis dolorem odit.
          </span>
          <div style={{ position: "absolute", right: 0, bottom: 0 }}>
            <FaQuoteRight size={36} />
          </div>
        </div>
        <span className={styles.name}>John Doe</span>
        <div>
          <span>Chef & Founder</span>
        </div>
        <div
          className={styles.sign}
          style={{ position: "relative", width: "30%", height: "auto" }}
        >
          <Image src={Signature} alt="Signature" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
