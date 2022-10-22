import React from "react";
import Image from "next/image";
import SubHeading from "../SubHeading";
import { wines, cocktails } from "../../data";
import MenuItem from "./MenuItem";
import WineAndBeer from "../../assets/images/wine_and_beer.png";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.container}>
      <SubHeading
        title="Menu That Fits You Palatte"
        alignImage="center"
        data-aos="zoom-out-up"
      />
      <h1 className={styles.header} data-aos="zoom-out-up">
        Today&apos;s Special
      </h1>
      <div className={styles.wrapper} id="menu">
        <div className={styles.menu} data-aos="fade-right" data-aos-delay="150">
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
        <div data-aos="zoom-in">
          <Image
            src={WineAndBeer}
            alt="Wine and Beer"
            width="300"
            height="300"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className={styles.menu} data-aos="fade-left" data-aos-delay="150">
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
