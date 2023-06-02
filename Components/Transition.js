import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import style from "../styles/Transition.module.css";
//footer and navigation component. 
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer.js";
// Framer motion config files and component.
import { AnimatePresence, motion } from "framer-motion";
import { animateOpacity } from "../data/framer-motion config";

const Transition = ({ children }) => {
  const Router = useRouter();

  return (
    <motion.div style={{ display: 'flex', overflow: 'hidden', width: '100%' }}           
    className={style.mainContainer}
    variants={animateOpacity}
    initial={animateOpacity.initial}
    animate={animateOpacity.animate}
    transition={animateOpacity.transition}
    exit={animateOpacity.exit}
    key={Router.route}>
      {/* Navigation Component */}
      <Navigation />
        {/* Animate the children component/pages */}
          {children}
    </motion.div>
  );
};

export default Transition;
