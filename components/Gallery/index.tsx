import Image from "next/image";
import React, { useState } from "react";
import { images } from "../../data";
import Modal from "./Modal";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import styles from "./Gallery.module.scss";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<HTMLImageElement | null>(
    null
  );

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>Gallery</h1>
        <div className={styles.gallery}>
          {images.map((item, i) => (
            <div
              className={styles.image}
              key={`${item}` + i}
              onClick={() => setSelectedImage(item)}
            >
              <HiMagnifyingGlassPlus
                color="#fff"
                size={36}
                className={styles.zoomIn}
                style={{ display: "none" }}
              />
              <Image src={item} alt="Photos" width="300" height="200" />
            </div>
          ))}
        </div>
      </div>
      <Modal
        image={selectedImage}
        setSelectedImage={(
          state: React.SetStateAction<HTMLImageElement | null>
        ) => setSelectedImage(state)}
      />
    </>
  );
};

export default Gallery;
