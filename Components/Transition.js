import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import style from "../styles/Transition.module.css";
import { loadingVariant } from "../data/framer-motion config";

import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer.js";

import { animateOpacity } from "../data/framer-motion config";

const Transition = ({ children }) => {
  const Router = useRouter();

  return (
    <div style={{ display: "flex", overflow: "hidden", width: "100%" }}>
      {/* Navigation Component */}
      <Navigation />
      <AnimatePresence mode={"popLayout"} initial="true">
        {/*Animate the children component/pages*/}
        <motion.div
          className={style.mainContainer}
          variants={animateOpacity}
          initial={animateOpacity.initial}
          animate={animateOpacity.animate}
          exit={animateOpacity.exit}
          transition={animateOpacity.transition}
          key={Router.route}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
