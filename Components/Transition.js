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
    <>
      {/*Animate the children component/pages*/}
      <AnimatePresence mode={"wait"} initial={false}>
        <motion.main
          className={style.mainContainer}
          variants={loadingVariant}
          animate={loadingVariant.animate}
          key={asPath}
        >
          {children}
          <Footer />
        </motion.main>
      </AnimatePresence>
    </>
  );
}

export default Transition;
