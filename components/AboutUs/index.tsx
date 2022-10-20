import Image from "next/image";
import React from "react";
import Logo from "../../assets/images/logo.png";
import SpatulaVertical from "../../assets/images/spatula_vertical.png";
import styles from "./AboutUs.module.scss";

const AboutUs: React.FC = () => {
  return (
    <div style={{ position: "relative" }}>
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
            iste modi dolore provident doloremque neque dolores quisquam tempora
            molestiae, velit quos ratione! Distinctio, culpa?
          </p>
          <button className={styles.button}>Read More</button>
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
            iste modi dolore provident doloremque neque dolores quisquam tempora
            molestiae, velit quos ratione! Distinctio, culpa?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
