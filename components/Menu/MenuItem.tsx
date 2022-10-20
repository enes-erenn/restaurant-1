import React from "react";
import styles from "./Menu.module.scss";

interface Props {
  title: string;
  tags: string;
  price: string;
}

const MenuItem: React.FC<Props> = ({ title, tags, price }) => {
  return (
    <div className={styles.menu_item}>
      <div className={styles.menu_head}>
        <p className={styles.title}>{title}</p>
        <span className={styles.dash} />
        <p>{price}</p>
      </div>
      <span>{tags}</span>
    </div>
  );
};

export default MenuItem;
