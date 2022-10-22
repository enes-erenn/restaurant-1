import React, { useState, useEffect } from "react";
import Image from "next/image";
import { images } from "../../data";
import Modal from "./Modal";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import styles from "./Gallery.module.scss";

interface Image {
  src: string;
  width: number;
  height: number;
  blurDataURL?: string;
  blurHeight?: number;
  blurWidth?: number;
}

const Gallery = () => {
  const [gallery, setGallery] = useState<Image[]>([]);
  const [counter, setCounter] = useState(4);
  const [selectedImage, setSelectedImage] = useState<
    HTMLImageElement | null | Image
  >(null);

  useEffect(() => {
    let galleryArray = [] as Image[];
    const addToGallery = (count: number) => {
      for (let i = 0; i < count; i++) {
        galleryArray.push(images[i]);
      }
    };

    addToGallery(counter);
    setGallery(galleryArray);
    return () => {
      galleryArray = [];
    };
  }, [counter]);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>Gallery</h1>
        <div className={styles.gallery}>
          {gallery.map((item: any, i) => (
            <div
              className={styles.image}
              key={`${item}` + i}
              onClick={() => {
                setSelectedImage(item);
              }}
            >
              <HiMagnifyingGlassPlus
                color="#fff"
                size={36}
                className={styles.zoomIn}
                style={{ display: "none" }}
              />
              <div
                style={{
                  width: "20rem",
                  height: "12rem",
                  position: "relative",
                }}
              >
                <Image
                  src={item}
                  alt="Photos"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
        {images.length !== gallery.length && (
          <button
            className={styles.button}
            onClick={() => {
              if (counter + 4 > images.length) {
                setCounter(
                  (prevCounter) => prevCounter + (images.length % prevCounter)
                );
              } else {
                setCounter((prevCounter) => prevCounter + 4);
              }
            }}
          >
            More
          </button>
        )}
      </div>
      <Modal
        image={selectedImage}
        images={images}
        setSelectedImage={(
          state: React.SetStateAction<HTMLImageElement | null | Image>
        ) => setSelectedImage(state)}
      />
    </>
  );
};

export default Gallery;
