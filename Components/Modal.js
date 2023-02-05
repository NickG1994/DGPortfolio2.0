import React from "react";
import Image from "next/image";
import styles from "../styles/Modal.module.css";
import { projects } from "../data/projects_data";
import { domAnimation, motion, AnimatePresence } from "framer-motion";
import { modal } from "../data/framer-motion config.js";
import { positions } from "@mui/system";

function Modal({ id, state, setToggleModal }) {
  return (
    <>
      {/* 
      if state variable is true then display modal else 
      display empty div.
    */}

      <motion.div
        variants={modal}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.25,
          },
        }}
        exit={modal.exit}
        key={id}
        className={styles.modal}
      >
        <motion.div
          className={styles.modal__content}
          variants={modal}
          initial={modal.initial}
          animate={modal.animate}
          exit={modal.exit}
          key={id}
        >
          <motion.span
            variants={modal}
            initial={modal.initial}
            animate={modal.animate}
            exit={modal.exit}
            key={id}
          >
            <Image
              layout="fill"
              src={projects[id] ? projects[id].src : alert("error id = null")}
              className={styles.modalImage}
            />
          </motion.span>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Modal;
