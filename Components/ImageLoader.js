import React, { useState } from "react";
import styles from "../styles/gridGallery.module.css";
import { motion } from "framer-motion";
import { SyncLoader } from "react-spinners";
import { useEffect } from "react";
import Image from "next/image";

function ImageLoader({ imgSrc, imgKey, layOut }) {
  const [imgLoaded, setimgLoaded] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  console.log(imgSrc, "-", imgKey + " " + layOut);

  return (
    <>
      <div>
        <motion.div className={styles.front} style={{ position: "relative" }}>
          <motion.div
            className={isLoading ? styles.loadingContainer : ""}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, background: "#ECB365", zIndex: 100 }}
            exit={{ opacity: 0, backgroundColor: "transparent" }}
            transition={2}
          >
            <SyncLoader
              color="#064663"
              style={isLoading ? { display: "block" } : { display: "none" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            viewport={{
              once: true,
            }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1.5 },
            }}
            transition="2"
            onClick={(e) => {
              toggleModal(e);
            }}
            className={styles.gridItem}
          >
            <Image src={imgSrc} />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default ImageLoader;
