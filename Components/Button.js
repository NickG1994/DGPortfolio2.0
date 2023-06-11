import React from "react";
import Link from "next/link";
import styles from "../styles/Button.module.css";
//import framer motion components and animation files
import { motion } from "framer-motion";
import { animateSlideDown } from "../data/framer-motion config";

function Button({ string, location, layout }) {
  return (
    <>
      <div
      >
        <Link className={styles.button} href={location ? location : "#"}>
          <div className={styles.button__content} style={layout && null}>
            <span></span> <span className={styles.buttonText}>{string}</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Button;
