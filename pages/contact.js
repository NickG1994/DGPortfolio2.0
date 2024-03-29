import React from "react";
import styles from "../styles/Contact.module.css";
import Form from "../Components/Form";

//import component icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import Head from "next/head";

export default function contact() {
  return (
    <div className={styles.contact__container}>
      <div className={styles.contact__content__container}>
        <div className={styles.contact__left}>
          <ul className={styles.contact__cards}>
            <li className={styles.contact__card}>
              <div className={styles.card__content}>
                <h2>Give me a email</h2>
                <p>
                  you can reach me with my personal email to chat, give a high
                  five! Or anytinh in between with d.gaona1994@gmail.com
                </p>
              </div>

              <MailIcon />
            </li>
            <li className={styles.contact__card}>
              <FacebookIcon />
              <div className={styles.card__content}>
                <h2>Find me in facebook!</h2>
                <p>
                  you can find me in facebook to get in touch. message me
                  through messenger to give support, get in touch, or just to
                  say hi.
                </p>
              </div>
            </li>
            <li className={styles.contact__card}>
              <div className={styles.card__content}>
                <h2>Say Hi in Linkdn</h2>
                <p>
                  you can reach me with my personal email to chat, give a high
                  five! Or anytinh in between with d.gaona1994@gmail.com
                </p>
              </div>
              <LinkedInIcon />
            </li>
          </ul>
        </div>
        <div className={styles.contact__right}>
          <Form />
        </div>
      </div>
    </div>
  );
}
