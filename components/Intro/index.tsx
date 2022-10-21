import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import Video from "../../assets/videos/meal.mp4";
import styles from "./Intro.module.scss";

const Intro: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef() as
    | React.MutableRefObject<HTMLVideoElement>
    | undefined;

  // Sets the video as playing or pause
  const handleToggle = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    if (videoRef) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  return (
    <div className={styles.container}>
      <video
        className={styles.video}
        src={Video}
        ref={videoRef}
        loop
        controls={false}
        muted
      />

      <div className={styles.overlay} onClick={handleToggle}>
        <div className={styles.circle}>
          {isPlaying ? (
            <BsPauseFill color="#fff" fontSize={36} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={36} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
