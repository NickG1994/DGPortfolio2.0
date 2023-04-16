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
      <AnimatePresence mode={"popLayout"} initial={false} exit={false}>
        <motion.main
          className={style.mainContainer}
          variants={loadingVariant}
          initial={loadingVariant.initial}
          animate={loadingVariant.animate}
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
