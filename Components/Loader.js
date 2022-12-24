import React from "react";
import style from "../styles/Loader.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Loader({ pathChange }) {
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      isLoading((prevLoading) => !prevLoading);
    }, [4000]);
    return () => {
      clearTimeout(timer);
    };
  }, [pathChange]);
  console.log(loading);
  const loadingVariant = {
    initial: {
      opacity: 1,
      transition: {
        duration: 0,
        delay: 0,
      },
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0,
      },
    },

    exit: {
      opacity: 0,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <div>
      <motion.div
        className={!loading ? style.blockContainer : ""}
        variants={loadingVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        key={loading}
      >
        <ClipLoader
          loading={true}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </motion.div>
    </div>
  );
}

export default Loader;
