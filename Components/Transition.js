import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { animate, AnimatePresence, motion } from "framer-motion";
import Projects from "../pages/Projects";
import style from "../styles/Transition.module.css";
import { loadingVariant } from "../data/framer-motion config";
import Footer from "./Footer";
import { Loader } from "next/dynamic";

function Transition({ children }) {
  const { asPath } = useRouter();

  return (
    <div className={style.containerTransition} style={{ overflow: "hidden" }}>
      {/*Animate the children component/pages*/}
      <AnimatePresence mode={"wait"} initial={false}>
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
              duration: 30,
            },
          }}
          key={asPath}
        >
          {<Loader /> && children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default Transition;
