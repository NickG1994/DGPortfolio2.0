import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { animate, AnimatePresence, motion } from "framer-motion";
import Projects from "../pages/Projects";
import style from "../styles/Transition.module.css";
import { loadingVariant } from "../data/framer-motion config";

function Transition({ children }) {
  const { asPath } = useRouter();

  return (
    <div style={{ overflow: "hidden" }}>
      {/*Animate the children component/pages*/}
      <AnimatePresence mode={"wait"} onExitComplete initial={false}>
        <motion.main
          className={style.mainContainer}
          variants={loadingVariant}
          initial={{
            opacity: 0,
            transition: {
              duration: 0.65,
            },
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 2,
              delay: 0.75,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 2,
            },
          }}
          key={asPath}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export default Transition;
