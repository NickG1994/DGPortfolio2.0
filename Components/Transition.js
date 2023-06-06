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
    <div className={style.flex} style={{display:"flex"}}>
        {/* Navigation Component */}
    <Navigation />
    <AnimatePresence mode='wait' initial={"true"} onExitComplete={() => {window.scrollTo(0,0);}}> 
      <motion.div 
        style={{width: '100%', position:"relative" }}      
        variants={animateOpacity}
        initial={animateOpacity.initial}
        animate={animateOpacity.animate}
        exit={animateOpacity.exit}
        transition={animateOpacity.transition}     
        className={style.mainContainer}
        key={Router.route}
      >
        {/* Animate the children component/pages */}
        {children}
        <Footer />
      </motion.div>
    </AnimatePresence>
    </div>
  );
};

export default Transition;
