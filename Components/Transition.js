import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import style from "../styles/Transition.module.css";
import indexStyle from '../styles/Home.module.css'
//footer and navigation component. 
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer.js";
// Framer motion config files and component.
import { AnimatePresence, motion } from "framer-motion";
import { animateOpacity } from "../data/framer-motion config";

export const Transition = ({ children }) => {
  const Router = useRouter();
  console.log(Router.route)
  return (
    <div style={{ display: "flex", overflow: "hidden", width: "100%" }}>
      {/* Navigation Component */}
      <Navigation />

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

    </div>
  );
};

export default Transition;
