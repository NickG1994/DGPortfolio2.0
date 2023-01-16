import React from "react";
import Link from "next/link";
import styles from "../styles/Button.module.css";

function Button({ string, location, layout }) {
  return (
    <>
      <Link className={styles.button} href={location ? location : "#"}>
        <div className={styles.button__content}>
          <span></span> <span className={styles.buttonText}>{string}</span>
        </div>
      </Link>
    </>
  );
}

export default Button;
