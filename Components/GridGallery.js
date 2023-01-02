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
    setModalIndex(e.currentTarget.id);
    setState(!state);
  }

  const slides = useMemo(() => {
    const slide = projects.map((project, index) => (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        viewport={{
          once: true,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.1 * index },
        }}
        onClick={(e) => modal(e)}
        id={index}
        key={index}
        className={styles["gridItem"]}
      >
        <div className={styles.front}>
          <Image src={project.src} loading="lazy" objectPosition={"initial"} />
          <div className={styles.overlay}>
            <div id={index} className={styles.overlayContainer}>
              <p className={styles.overlayText}>{project.Header}</p>
            </div>
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
