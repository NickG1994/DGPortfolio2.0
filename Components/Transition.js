import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import style from "../styles/Transition.module.css";
import { loadingVariant } from "../data/framer-motion config";
import Footer from "../Components/Footer.js";

const Transition = ({ children }) => {
  const Router = useRouter();

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      {/*Animate the children component/pages*/}
      <AnimatePresence mode="popLayout" initial={true}>
        <motion.div
          className={style.mainContainer}
          variants={loadingVariant}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 2,
            },
          }}
          transition={{ duration: 2 }}
          key={Router.route}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
