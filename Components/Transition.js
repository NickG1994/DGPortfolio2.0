import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { animate, AnimatePresence, motion } from "framer-motion";
import Projects from "../pages/Projects";
import style from "../styles/Transition.module.css";
import { loadingVariant } from "../data/framer-motion config";
import Footer from "./Footer";

function Transition({ children }) {
  const { asPath } = useRouter();

  return (
    <div className={style.containerTransition} style={{ overflow: "hidden" }}>
      {/*Animate the children component/pages*/}
      <AnimatePresence mode={"wait"} initial={false} exit={false}>
        <motion.main
          className={style.mainContainer}
          variants={loadingVariant}
          initial={{
            initial: {
              opacity: 0,
              transition: {
                duration: 0.65,
              },
            },
          }}
          animate={{
            animate: {
              opacity: 1,
              transition: {
                duration: 2,
                delay: 0.75,
              },
            },
          }}
          exit={{
            exit: {
              opacity: 0,
              transition: {
                duration: 1,
                delay: 0,
              },
            },
          }}
          key={asPath}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default Transition;
