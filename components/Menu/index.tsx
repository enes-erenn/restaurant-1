import React from "react";
import Image from "next/image";
import SubHeading from "../SubHeading";
import { wines, cocktails } from "../../data";
import MenuItem from "./MenuItem";
import WineAndBeer from "../../assets/images/wine_and_beer.png";
import styles from "./Menu.module.scss";

const Menu: React.FC = () => {
  return (
    <div className={styles.container}>
      <SubHeading title="Menu That Fits You Palatte" alignImage="center" />
      <h1 className={styles.header}>Today&apos;s Special</h1>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <p className={styles.menu_Header}>Wine & Beer</p>
          <div className={styles.menu_item}>
            {wines.map((item) => (
              <MenuItem
                key={item.title}
                title={item.title}
                price={item.price}
                tags={item.tags}
              />
            ))}
          </div>
        </div>
        <div>
          <Image
            src={WineAndBeer}
            alt="Wine and Beer"
            width="300"
            height="300"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className={styles.menu}>
          <p className={styles.menu_Header}>Cocktails</p>
          <div className={styles.menu_item}>
            {cocktails.map((item) => (
              <MenuItem
                key={item.title}
                title={item.title}
                price={item.price}
                tags={item.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
