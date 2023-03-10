import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { animate, AnimatePresence, motion, LayoutGroup } from "framer-motion";
import Projects from "../pages/Projects";
import style from "../styles/Transition.module.css";
import ClipLoader from "react-spinners/ClipLoader";

function Transition({ children }) {
  const { asPath } = useRouter();
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    switch (document.readyState) {
      case "loading":
        isLoading((prev) => false);
        console.log(loading);
      case "complete":
        isLoading((prev) => true);
        console.log(loading);
    }

    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    return () => {
      isLoading((prev) => false);
    };
  }, [loading]);

  const variantOne = {
    inactive: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
    enter: {
      opacity: 0,
      transition: {
        duration: 0,
        delay: 2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 2,
      },
    },
  };
  const loadingVariant = {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.65,
        delay: 0,
      },
      overflow: "hidden",
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.65,
        delay: 0,
      },
    },

    exit: {
      opacity: 0,
      transition: {
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <div className={style.containerTransition} style={{ overflow: "hidden" }}>
      {/*Animate the children component/pages*/}
      <AnimatePresence
        initial={{ opacity: 0, y: 0, transition: { duration: 1, delay: 2 } }}
        mode={"wait"}
      >
        {!loading ? (
          <motion.div
            className={!loading ? style.blockContainer : style.hideLoading}
            variants={loadingVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            key={loading}
          >
            <ClipLoader
              loading={!loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </motion.div>
        ) : (
          <motion.div
            className={style.mainContainer}
            variants={variantOne}
            initial="enter"
            animate="inactive"
            exit="exit"
            key={asPath}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Transition;
