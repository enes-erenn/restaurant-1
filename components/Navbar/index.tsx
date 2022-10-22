import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Logo from "../../assets/images/logo.png";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState<boolean>(false);
  // Toggles the menu for small screens
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleFixNavbar = () => {
    if (window.scrollY >= 200) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleFixNavbar);
  });

  return (
    <nav
      className={
        !isFixed ? `${styles.container}` : `${styles.container} ${styles.fixed}`
      }
      /*    className={styles.fixed} */
    >
      {/********** LOGO **********/}
      <div>
        <Image src={Logo} alt="Logo" width="130" height="130" />
      </div>

      {/********** LIST **********/}
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <a href="#">Home</a>
        </li>
        <li className={styles.list_item}>
          <a href="#about">About</a>
        </li>
        <li className={styles.list_item}>
          <a href="#menu">Menu</a>
        </li>
        <li className={styles.list_item}>
          <a href="#awards">Awards</a>
        </li>
        <li className={styles.list_item}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/********** SMALL SCREEN  **********/}
      <div className={styles.small_screen}>
        {/********** HAMBURGER MENU BUTTON **********/}
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          className={styles.overlay_open}
          onClick={() => setToggleMenu(true)}
        />
        {/********** SMALL SCREEN OVERLAY **********/}
        {toggleMenu && (
          <div className={styles.small_screen_overlay}>
            <MdOutlineRestaurantMenu
              color="#fff"
              fontSize={27}
              className={styles.overlay_close}
              onClick={() => setToggleMenu(false)}
            />
            {/********** SMALL SCREEN LIST **********/}
            <ul className={styles.small_screen_list}>
              <li className={styles.list_item}>
                <a href="#">Home</a>
              </li>
              <li className={styles.list_item}>
                <a href="#about">About</a>
              </li>
              <li className={styles.list_item}>
                <a href="#menu">Menu</a>
              </li>
              <li className={styles.list_item}>
                <a href="#awards">Awards</a>
              </li>
              <li className={styles.list_item}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
