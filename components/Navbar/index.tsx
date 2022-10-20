import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  // Toggles the menu for small screens
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <nav className={styles.container}>
      {/********** LOGO **********/}
      <div className={styles.logo}>
        <Image src="" alt="Logo" width="100" height="60" />
      </div>
      {/********** LIST **********/}
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.list_item}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.list_item}>
          <Link href="/menu">Menu</Link>
        </li>
        <li className={styles.list_item}>
          <Link href="/awards">Awards</Link>
        </li>
        <li className={styles.list_item}>
          <Link href="/contact">Contact</Link>
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
                <Link href="/">Home</Link>
              </li>
              <li className={styles.list_item}>
                <Link href="/about">About</Link>
              </li>
              <li className={styles.list_item}>
                <Link href="/menu">Menu</Link>
              </li>
              <li className={styles.list_item}>
                <Link href="/awards">Awards</Link>
              </li>
              <li className={styles.list_item}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
