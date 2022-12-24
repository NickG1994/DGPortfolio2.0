import React, { useMemo, useEffect, useState } from "react";
import styles from "../styles/gridGallery.module.css";
import { projects } from "../data/projects_data";
import Image from "next/image";
import Modal from "./Modal";
import { motion } from "framer-motion";

function GridGallery() {
  const [modalIndex, setModalIndex] = useState(0);
  const [state, setState] = useState(false);

  function modal(e) {
    //console.log(e.target);
    setModalIndex(e.currentTarget.id);
    setState(!state);
  }

  const slides = useMemo(() => {
    const slide = projects.map((project, index) => (
      <motion.div
        viewport={{
          once: true,
          transition: {
            duration: 1,
            delay: 0.75,
          },
        }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1 },
        }}
        initial={{ opacity: 0 }}
        onClick={(e) => modal(e)}
        id={index}
        key={index}
        className={styles["gridItem"]}
      >
        <Image src={project.src} loading="lazy" />
        <div className={styles.overlay}>
          <div id={index} className={styles.overlayContainer}>
            <p className={styles.overlayText}>{project.Header}</p>
          </div>
        </div>
      </motion.div>
    ));
    return slide;
  }, []);

  return (
    <content className={styles.galleryGrid}>
      {slides}
      <Modal id={modalIndex} state={state} setToggleModal={setState} />
    </content>
  );
}

export default GridGallery;
