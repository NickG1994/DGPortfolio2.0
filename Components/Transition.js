import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { animate, AnimatePresence, motion, LayoutGroup } from "framer-motion";
import Projects from "../pages/Projects";
import style from "../styles/Transition.module.css";
import ClipLoader from "react-spinners/ClipLoader";
import { loadingVariant } from "../data/framer-motion config";
import Footer from "./Footer";
function Transition({ children }) {
  const { asPath } = useRouter();

  const variantOne = {
    initial: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.75,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        delay: 0.75,
      },
    },
  };

  return (
    <div className={style.containerTransition} style={{ overflow: "hidden" }}>
      {/*Animate the children component/pages*/}
      <AnimatePresence mode={"wait"} initial={false}>
        <motion.main
          className={style.mainContainer}
          variants={loadingVariant}
          initial={loadingVariant.initial}
          animate={loadingVariant.animate}
          exit={loadingVariant.exit}
          key={asPath}
        >
          {children}
          <Footer />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export default Transition;
