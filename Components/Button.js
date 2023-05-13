import React from "react";
import Link from "next/link";
import styles from "../styles/Button.module.css";
//import framer motion components and animation files
import { LazyMotion, m, domAnimation } from "framer-motion";
import { animateSlideDown } from "../data/framer-motion config";

function Button({ string, location, layout }) {
  /*
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={textMovingDownDelayTwo.initial}
        animate={{ ...textMovingDownDelayTwo.animate, delay: 1 }}
        exit={textMovingDownDelayTwo.exit}
        style={layout}
      >
        <Link className={styles.button} href={location ? location : "#"}>
          <div className={styles.button__content}>
            <span></span> <span className={styles.buttonText}>{string}</span>
          </div>
        </Link>
      </m.div>
    </LazyMotion>
  );
  */
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={animateSlideDown}
        initial={animateSlideDown.initial}
        animate={animateSlideDown.animate}
        exit={animateSlideDown.exit}
        transition={{ ...animateSlideDown.transition, delay: 2.5 }}
        style={layout}
      >
        <Link className={styles.button} href={location ? location : "#"}>
          <div className={styles.button__content}>
            <span></span> <span className={styles.buttonText}>{string}</span>
          </div>
        </Link>
      </m.div>
    </LazyMotion>
  );
}

export default Button;
