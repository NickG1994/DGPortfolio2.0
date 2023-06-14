// React packages. 
import Image from "next/image";
import React from "react";
import Link from "next/link";
// Data links
import { PageLink } from "../data/PageLinks";
import Navigation from "./Navigation/Navigation";
// components
import Button from "./Button";
import footerStyles from "../styles/Footer.module.css";
// framer motion
import { motion } from 'framer-motion'
import { animateOpacity, animateSlideDown } from "../data/framer-motion config";

function Footer() {
  return (
    <ul className={footerStyles.cardContainer}>
      {
        <motion.li 
          className={footerStyles.cards}
          variants={animateSlideDown}
          initial={animateSlideDown.initial}
          animate={animateSlideDown.animate}
          exit={animateSlideDown.exit}
          transition={animateSlideDown.transition}
        >
          <div className={footerStyles.imageContainer}>
            <Image
              style={footerStyles.footerImage}
              src={require("../public/img/LOGO.png").default}
              alt={"Portfolio Logo"}
            />
          </div>
          <div className={footerStyles.footerContentContainer}>
            <h2>about me</h2>
            <p>
              An inspired and creative new web developer. Willing to work
              alongside Web developers and other IT Professionals. As well as
              able to be self-sufficient alone. Building, learning and deploying
              web pages...
            </p>
            {/* Th button that was once here made the error in the footer. */}
          </div>
        </motion.li>
      }
      {/* <li className={footerStyles.cards}>
        <h2 style={{ display: "inline-block" }}>sitemap</h2>
        <nav className={footerStyles.siteMap}>
          <ul>
            {PageLink.map((page, index) => (
              <li key={index}>
                <Link className={footerStyles.link} href={page.path}>
                  <span>{page.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </li> */}
      <li className={footerStyles.cards}>
        <h2>External Links</h2>
      </li>
    </ul>
  );
}

export default Footer;
