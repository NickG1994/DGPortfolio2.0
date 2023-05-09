import React from "react";
import { useMemo, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { images } from "../../data/Carousel__Images.js";
import styles from "../../styles/Coursel.module.css";
import Image from "next/image";
import ImageLoader from "../ImageLoader.js";

function Coursel() {
  const [isLoadingHero, setIsLoadingHero] = useState(true);

  return (
    <div className={styles.courselContainer}>
      <div className={styles.slidesContainer}>
        {images.map((img, index) => (
          <m.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={3}
            className={styles.slides}
            key={isLoadingHero}
          >
            <ImageLoader imgSrc={img.src} imgKey={`courselImg-${index}`}>
              {/*<Image
                loading="eager"
                src={img.src}
                className={styles.bgImage}
                fill="true"
                onLoad={() => {
                  setIsLoadingHero(false);
                  console.log("hero image loading: " + isLoadingHero);
                }}
              />*/}
            </ImageLoader>
          </m.div>
        ))}
      </div>
    </div>
  );
}

export default Coursel;
