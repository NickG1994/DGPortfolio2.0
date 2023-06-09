import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
//footer and navigation component. 
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer.js";
// Framer motion config files and component.
import { AnimatePresence, motion } from "framer-motion";
import { animateOpacity } from "../data/framer-motion config";
import styles from "../styles/Home.module.css";

function Transition({ children }) {
  const Router = useRouter();
  console.log(children)

  return (
    <div style={{display:"flex"}}>
    {/* Navigation Component */}
    <Navigation />
    <AnimatePresence mode="popLayout" initial="false"> 
      <motion.div 
        style={{width: '100%', position:"relative"}}     
        variants={animateOpacity}
        initial={animateOpacity.initial}
        animate={animateOpacity.animate}
        exit={animateOpacity.exit}
        transition={animateOpacity.transition}     
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
