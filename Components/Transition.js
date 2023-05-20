import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import style from "../styles/Transition.module.css";
import { loadingVariant } from "../data/framer-motion config";
import Footer from "../Components/Footer.js";

import { animateOpacity } from "../data/framer-motion config";

const Transition = ({ children }) => {
  const Router = useRouter();

  return (
    <>
      {" "}
      <AnimatePresence>
        <div>
          {/*Animate the children component/pages*/}
          <motion.div
            variants={animateOpacity}
            initial={animateOpacity.initial}
            animate={animateOpacity.animate}
            exit={animateOpacity.exit}
            transition={animateOpacity.transition}
            key={Router.route}
          >
            {children}
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default Transition;
