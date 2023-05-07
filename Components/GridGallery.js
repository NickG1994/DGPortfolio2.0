import React, { useMemo, useState } from "react";
import styles from "../styles/gridGallery.module.css";
import { projects } from "../data/projects_data";
import Image from "next/image";
import Modal from "./Modal";
import { motion, AnimatePresence } from "framer-motion";
import { SyncLoader } from "react-spinners";
import { useEffect } from "react";

function GridGallery() {
  const [modalIndex, setModalIndex] = useState(0);
  const [state, setState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // classname is generated by next.js. So i had to copy from the inspector
  // and paste the real or generated classname into the code directly.
  function toggleModal(e) {
    e.preventDefault();
    setModalIndex(e.currentTarget.id);
    setState((prevToggle) => !prevToggle);
  }

  return (
    <AnimatePresence initial={true}>
      <>
        <div className={styles.galleryGrid}>
          {projects.map((project, index) => (
            <motion.div
              className={styles.front}
              style={{ position: "relative" }}
              key={index}
            >
              <motion.div
                className={isLoading ? styles.loadingContainer : ""}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, background: "#ECB365", zIndex: 100 }}
                exit={{ opacity: 0, backgroundColor: "transparent" }}
                transition={1}
              >
                <SyncLoader
                  color="#064663"
                  style={isLoading ? { display: "block" } : { display: "none" }}
                />
              </motion.div>
              <motion.div
                id={`image-${index}`}
                initial={{ opacity: 0, y: 50 }}
                viewport={{
                  once: true,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.09 * index },
                }}
                onClick={(e) => {
                  toggleModal(e);
                }}
                className={styles.gridItem}
              >
                <>
                  <Image
                    loading="lazy"
                    layout="responsive"
                    src={project.src}
                    onLoad={() => {
                      setIsLoading((prevLoading) => (prevLoading = false));
                      //console.log("loading..." + isLoading);
                    }}
                  />
                  ;
                </>

                <div className={styles.overlay}>
                  <div id={index} className={styles.overlayContainer}>
                    <p className={styles.overlayText}>{project.Header}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div
          onClick={(e) => {
            toggleModal(e);
          }}
        >
          {state && <Modal id={modalIndex} />}
        </div>
      </>
    </AnimatePresence>
  );
}

export default GridGallery;
