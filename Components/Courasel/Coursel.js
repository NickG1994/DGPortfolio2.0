import React from "react";
import { useMemo, useState } from "react";
import { images } from "../../data/Carousel__Images.js";
import styles from "../../styles/Coursel.module.css";
import Image from "next/image";

function Coursel() {
  const slides = useMemo(() => {
    const Images = images.map((img, index) => (
      <div key={index} className={styles.slides}>
        <Image
          loading="eager"
          src={img.src}
          className={styles.bgImage}
          key={index}
          fill="true"
        />
      </div>
    ));

    return Images;
  }, []);

  return (
    <div className={styles.courselContainer}>
      <div className={styles.slidesContainer}>{slides}</div>
    </div>
  );
}

export default Coursel;
