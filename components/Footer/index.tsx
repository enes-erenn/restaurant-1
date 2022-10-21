import React from "react";
import Image from "next/image";
import Logo from "../../assets/images/logo.png";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div>
          <h3 className={styles.headers}>Contact</h3>
          <div className={styles.infos}>
            <p>9W 55rd St. New York, NY 10012, USA</p>
            <p>+1 212 334 1133</p>
          </div>
        </div>
        <div className={styles.logo}>
          <Image src={Logo} alt="Logo" width="300" height="300" />
        </div>
        <div>
          <h3 className={styles.headers}>Follow Us</h3>
          <div className={styles.social}>
            <div style={{ cursor: "pointer" }}>
              <Link href="/">
                <a target="_blank">
                  <AiFillInstagram className={styles.icons} size={36} />
                </a>
              </Link>
            </div>
            <div style={{ cursor: "pointer" }}>
              <Link href="/">
                <a target="_blank">
                  <AiFillFacebook className={styles.icons} size={36} />
                </a>
              </Link>
            </div>
            <div style={{ cursor: "pointer" }}>
              <Link href="/">
                <a target="_blank">
                  <AiFillTwitterSquare className={styles.icons} size={36} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>
        Ⓒ {new Date().getFullYear()} BBQHOUSE. ALL RIGHTS RESERVED.
      </p>
    </div>
  );
};

export default Footer;
