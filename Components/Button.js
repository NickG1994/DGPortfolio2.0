import React from "react";
import Link from "next/link";
import styles from "../styles/Button.module.css";

import { LazyMotion, m } from "framer-motion";
import {
  textMovingUp,
  textMovingDownDelayTwo,
} from "../data/framer-motion config";
import { domAnimation } from "framer-motion";

function Button({ string, location, layout }) {
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
}

export default Button;
