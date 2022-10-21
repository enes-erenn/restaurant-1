import React from "react";
import Image from "next/image";
import styles from "./Laurels.module.scss";

interface Props {
  award: {
    title: string;
    subtitle: string;
    image: any;
  };
}

const AwardCard: React.FC<Props> = ({ award }) => {
  const { title, subtitle, image } = award;

  return (
    <div className={styles.award}>
      <Image src={image} alt={title} width="64" height="64" />
      <div className={styles.award_content}>
        <p className={styles.award_title}>{title}</p>
        <span>{subtitle}</span>
      </div>
    </div>
  );
};

export default AwardCard;
