import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import SpatulaVertical from "../../assets/images/spatula_vertical.png";
import styles from "./AboutUs.module.scss";
import { BsChevronCompactUp, BsChevronDown } from "react-icons/bs";

const AboutUs = () => {
  const [isShortAboutUs, setIsShortAboutUs] = useState<boolean>(true);
  const [isShortHistory, setIsShortHistory] = useState<boolean>(true);

  return (
    <div style={{ position: "relative" }} id="about">
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: "0.2",
        }}
      >
        <Image src={Logo} width="200" height="200" alt="Logo" />
      </div>
      <div className={styles.container}>
        <div className={styles.aboutUs}>
          <h1 className={styles.header}>About Us</h1>
          {isShortAboutUs ? (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              tempora accusantium! Reiciendis ex cupiditate iusto enim illum
              inventore corporis officia? Maxime eveniet alias rerum cumque
              excepturi pariatur incidunt laborum voluptatum? Veritatis ipsum
              facilis consectetur unde nulla dolorem non expedita deleniti, iure
              culpa id consequuntur a obcaecati.
            </p>
          ) : (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              tempora accusantium! Reiciendis ex cupiditate iusto enim illum
              inventore corporis officia? Maxime eveniet alias rerum cumque
              excepturi pariatur incidunt laborum voluptatum? Veritatis ipsum
              facilis consectetur unde nulla dolorem non expedita deleniti, iure
              culpa id consequuntur a obcaecati. Assumenda ut libero reiciendis
              quibusdam deserunt expedita at consequatur, labore a, dolores
              necessitatibus sit. Omnis alias maxime suscipit ipsa culpa
              asperiores repudiandae esse excepturi illum totam ducimus et ullam
              iste modi dolore provident doloremque neque dolores quisquam
              tempora molestiae, velit quos ratione! Distinctio, culpa?
            </p>
          )}
          <button
            className={styles.button}
            onClick={() =>
              setIsShortAboutUs((prevIsShortAboutUs) => !prevIsShortAboutUs)
            }
          >
            {isShortAboutUs ? <BsChevronDown /> : <BsChevronCompactUp />}
          </button>
        </div>
        <div
          className={styles.image}
          style={{ position: "relative", width: "100%", height: "auto" }}
        >
          <Image
            src={SpatulaVertical}
            alt="Vertical Spatula"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.ourHistory}>
          <h1 className={styles.header}>Our History</h1>
          {isShortHistory ? (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              tempora accusantium! Reiciendis ex cupiditate iusto enim illum
              inventore corporis officia? Maxime eveniet alias rerum cumque
              excepturi pariatur incidunt laborum voluptatum? Veritatis ipsum
              facilis consectetur unde nulla dolorem non expedita deleniti, iure
              culpa id consequuntur a obcaecati.
            </p>
          ) : (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              tempora accusantium! Reiciendis ex cupiditate iusto enim illum
              inventore corporis officia? Maxime eveniet alias rerum cumque
              excepturi pariatur incidunt laborum voluptatum? Veritatis ipsum
              facilis consectetur unde nulla dolorem non expedita deleniti, iure
              culpa id consequuntur a obcaecati. Assumenda ut libero reiciendis
              quibusdam deserunt expedita at consequatur, labore a, dolores
              necessitatibus sit. Omnis alias maxime suscipit ipsa culpa
              asperiores repudiandae esse excepturi illum totam ducimus et ullam
              iste modi dolore provident doloremque neque dolores quisquam
              tempora molestiae, velit quos ratione! Distinctio, culpa?
            </p>
          )}
          <button
            className={styles.button}
            onClick={() =>
              setIsShortHistory((prevIsShortHistory) => !prevIsShortHistory)
            }
          >
            {isShortHistory ? <BsChevronDown /> : <BsChevronCompactUp />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
