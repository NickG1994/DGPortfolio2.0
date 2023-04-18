import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import style from "../styles/Transition.module.css";
import { loadingVariant } from "../data/framer-motion config";

function Transition({ children }) {
  const { asPath } = useRouter();

  return (
    <div style={{ overflow: "hidden" }}>
      {/*Animate the children component/pages*/}
      <AnimatePresence mode={"wait"} initial={false}>
        <motion.div
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
              duration: 0,
            },
          }}
          key={asPath}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Transition;
