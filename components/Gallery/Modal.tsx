import React from "react";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./Gallery.module.scss";

interface Props {
  image?: HTMLImageElement | null;
  setSelectedImage: (
    value: React.SetStateAction<HTMLImageElement | null>
  ) => void;
}

const Modal: React.FC<Props> = ({ image, setSelectedImage }) => {
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
        </div>
      )}
    </>
  );
};

export default Modal;
