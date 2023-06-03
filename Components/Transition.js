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
  let copies = [];

  useEffect(() => {
    Router.events.on("beforeHistoryChange", onLoad);
    return () => {
      Router.events.off("beforeHistoryChange", onLoad);
    };
  }, []);

  const onLoad = () => {
    // Create a clone of every <style> and <link> that currently affects the page. It doesn't matter
    // if Next.js is going to remove them or not since we are going to remove the copies ourselves
    // later on when the transition finishes.
    const nodes = document.querySelectorAll(
      "link[rel=stylesheet], style:not([media=x])"
    );
    copies = [...nodes].map((el) => el.cloneNode(true));

    for (let copy of copies) {
      // Remove Next.js' data attributes so the copies are not removed from the DOM in the route
      // change process.
      copy.removeAttribute("data-n-p");
      copy.removeAttribute("data-n-href");

      // Add duplicated nodes to the DOM.
      document.head.appendChild(copy);
    }
  };

  const onExit = () => {
    for (let copy of copies) {
      // Remove previous page's styles after the transition has finalized.
      document.head.removeChild(copy);
    }
  };

  return (
    <div style={{display:"flex"}}>
        {/* Navigation Component */}
        <Navigation />
        <AnimatePresence mode='popLayout' initial={"false"} onExitComplete={() => {window.scrollTo(0,0);onExit;}}> 
        <motion.div style={{width: '100%' }}           
          className={style.mainContainer}
          key={Router.route}>
        {/* Animate the children component/pages */}
          {children}
    </motion.div>
    </AnimatePresence>
    </div>
  );
};

export default Transition;
