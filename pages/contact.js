import React from "react";
import styles from "../styles/Contact.module.css";
import Form from "../Components/Form";

//import component icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import Head from "next/head";
//import framer motion and animation config files
import { m, LazyMotion, domAnimation } from "framer-motion";
import {
  animateSlideLeft,
  animateSlideRight,
  animateOpacity,
} from "../data/framer-motion config";

export default function contact() {
  return (
    <main>
      <Head>
        <title>Nick - Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/DominicGaonaTabLogo.ico" />
      </Head>
      <LazyMotion features={domAnimation}>
        <div className={styles.contact__container}>
          <m.div
            className={styles.contact__content__container}
            variants={animateOpacity}
            initial={animateOpacity.initial}
            animate={animateOpacity.animate}
            exit={animateOpacity.exit}
            transition={{ ...animateOpacity.exit, delay: 1 }}
          >
            <div className={styles.contact__left}>
              <ul className={styles.contact__cards}>
                <li className={styles.contact__card}>
                  <m.div
                    className={styles.card__content}
                    variants={animateSlideLeft}
                    initial={animateSlideLeft.initial}
                    animate={animateSlideLeft.animate}
                    exit={animateSlideLeft.exit}
                    transition={{ ...animateSlideLeft.exit, delay: 1 }}
                  >
                    <h2>Give me a email</h2>
                    <p>
                      you can reach me with my personal email to chat, give a
                      high five! Or anytinh in between with
                      d.gaona1994@gmail.com
                    </p>
                  </m.div>
                  <m.span
                    variants={animateSlideLeft}
                    initial={animateSlideLeft.initial}
                    animate={animateSlideLeft.animate}
                    exit={animateSlideLeft.exit}
                    transition={{ ...animateSlideLeft.exit, delay: 1.2 }}
                  >
                    <MailIcon />
                  </m.span>
                </li>
                <li className={styles.contact__card}>
                  <m.span
                    variants={animateSlideRight}
                    initial={animateSlideRight.initial}
                    animate={animateSlideRight.animate}
                    exit={animateSlideRight.exit}
                    transition={{ ...animateSlideRight.exit, delay: 1.6 }}
                  >
                    <FacebookIcon />
                  </m.span>

                  <m.div
                    className={styles.card__content}
                    variants={animateSlideRight}
                    initial={animateSlideRight.initial}
                    animate={animateSlideRight.animate}
                    exit={animateSlideRight.exit}
                    transition={{ ...animateSlideRight.exit, delay: 1.4 }}
                  >
                    <h2>Find me in facebook!</h2>
                    <p>
                      you can find me in facebook to get in touch. message me
                      through messenger to give support, get in touch, or just
                      to say hi.
                    </p>
                  </m.div>
                </li>
                <li className={styles.contact__card}>
                  <m.div
                    className={styles.card__content}
                    variants={animateSlideLeft}
                    initial={animateSlideLeft.initial}
                    animate={animateSlideLeft.animate}
                    exit={animateSlideLeft.exit}
                    transition={{ ...animateSlideLeft.exit, delay: 1.8 }}
                  >
                    <h2>Say Hi in Linkdn</h2>
                    <p>
                      you can reach me with my personal email to chat, give a
                      high five! Or anytinh in between with
                      d.gaona1994@gmail.com
                    </p>
                  </m.div>
                  <m.span
                    variants={animateSlideLeft}
                    initial={animateSlideLeft.initial}
                    animate={animateSlideLeft.animate}
                    exit={animateSlideLeft.exit}
                    transition={{ ...animateSlideLeft.exit, delay: 2 }}
                  >
                    <LinkedInIcon />
                  </m.span>
                </li>
              </ul>
            </div>
            <div className={styles.contact__right}>
              <Form />
            </div>
          </m.div>
        </div>
      </LazyMotion>
    </main>
  );
}
