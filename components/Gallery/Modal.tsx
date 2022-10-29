import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import styles from "./Gallery.module.scss";

interface Props {
  image?: HTMLImageElement | null | Image;
  images: Image[];
  setSelectedImage: (
    value: React.SetStateAction<HTMLImageElement | null | Image>
  ) => void;
}

interface Image {
  src: string;
  width: number;
  height: number;
  blurDataURL?: string;
  blurHeight?: number;
  blurWidth?: number;
}

const Modal: React.FC<Props> = ({ image, setSelectedImage, images }) => {
  const [index, setIndex] = useState<number | null>(null);
  console.log(index);
  // Sets the image to the modal
  const handleChangeImage = (e: any, type: "back" | "next") => {
    e.stopPropagation();
    if (index !== null) {
      // Sets the image
      setSelectedImage(type === "back" ? images[index - 1] : images[index + 1]);
    }
  };

  useEffect(() => {
    // Maps the images which equals the src
    const map = images.map((img: any) => image?.src === img.src);
    // Finds the index
    const index = map.indexOf(true);
    setIndex(index);
  }, [image, images]);

  return (
    <>
      {image && (
        <div className={styles.modal} onClick={() => setSelectedImage(null)}>
          <div className={styles.close}>
            <AiOutlineCloseCircle
              color="#fff"
              size={40}
              className={styles.closeButton}
              onClick={() => setSelectedImage(null)}
            />
          </div>

          <button
            className={styles.button_back}
            style={index === 0 ? { opacity: "0.2" } : { opacity: 1 }}
            onClick={(e) => {
              e.stopPropagation();
              if (index !== 0) {
                handleChangeImage(e, "back");
              }
            }}
          >
            <IoIosArrowDropleft size={100} />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "60%",
              height: "70%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              position: "relative",
            }}
          >
            <Image src={image} alt="Photo" layout="fill" objectFit="contain" />
          </div>
          <button
            className={styles.button_next}
            style={
              index === images.length - 1 ? { opacity: "0.2" } : { opacity: 1 }
            }
            onClick={(e) => {
              e.stopPropagation();
              if (index !== images.length) {
                handleChangeImage(e, "next");
              }
            }}
          >
            <IoIosArrowDropright size={100} />
          </button>
        </div>
      )}
    </>
  );
};

export default React.memo(Modal);
