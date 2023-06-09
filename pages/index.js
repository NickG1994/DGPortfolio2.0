import React from "react";
// import styles
import styles from "../styles/Home.module.css";
//import next components
import Head from "next/head";
import Image from "next/image";
/* Components */
import Form from "../Components/Form";
import Coursel from "../Components/Courasel/Coursel";
import Button from "../Components/Button";
import Modal from "../Components/Modal.js";
import GridGallery from "../Components/GridGallery";
// Import component for loading images.
import ImageLoader from "../Components/ImageLoader.js";
/* Import SVG */
import { SVG } from "../data/SVG.js";
import { SvgHobbies } from "../data/SvgHobbies";
// import Data
import { projects } from "../data/projects_data";
//import framer-motion (Animation) and Animation Files
import { motion } from "framer-motion";
import {
  animateSlideDown,
  animateSlideSide,
  animateSlideLeft,
  animateSlideRight,
  animateOpacity,
} from "../data/framer-motion config.js";
import GoogleMaps from "../Components/GoogleMaps.js";

export default function Home({Router}) {
  console.log(Router)
  return (
    <div>
      <Head>
        <title>Nick - Home</title>
        <link rel="icon" href="/img/DominicGaonaTabLogo.ico" />
        <meta name="description" content="I am a dedicated and highly skilled web developer specializing in WordPress, 
        React.js, CSS, JavaScript, HTML, APIs, Node.js, Express.js, Vue.js, troubleshooting, and server management. 
        Contact me for outstanding web development results." />
        <meta name="keywords" content="web developer, WordPress, React.js, CSS, JavaScript, HTML, APIs, Node.js, Express.js, Vue.js, troubleshooting, server management" />
        <meta name="author" content="Dominic Gaona" />

        {/*Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spiffy-mermaid-40ea97.netlify.app/" />
        <meta property="og:title" content="Hello, My name is Dominic Gaona" />
        <meta property="og:description" content="I am a dedicated and highly skilled web developer specializing in WordPress, React.js, CSS, JavaScript, HTML, APIs, Node.js, Express.js, Vue.js, troubleshooting, and server management. Contact me for outstanding web development results." />
        <meta property="og:image" content="/img/DominicGaonaTabLogo.ico" />

        {/* Twitter */}
        <meta property="twitter:card" content="/img/DominicGaonaTabLogo.ico" />
        <meta property="twitter:url" content="https://spiffy-mermaid-40ea97.netlify.app/" />
        <meta property="twitter:title" content="Hello, My name is Dominic Gaona" />
        <meta property="twitter:description" content="I am a dedicated and highly skilled web developer specializing in WordPress, React.js, CSS, JavaScript, HTML, APIs, Node.js, Express.js, Vue.js, troubleshooting, and server management. Contact me for outstanding web development results." />
        <meta property="twitter:image" content="/img/DominicGaonaTabLogo.ico" />
      </Head>
      {/* Main content */}
        <div className={styles.mainContainer} >
          {/* Hero Section */}
          <section id={styles.hero} >
            <div className={styles.heroContainer}>
              {/*<Coursel />*/}
              <div className={styles.courselContentContainer}>
                <h1

                >
                  Hello,
                  <br /> My name is <br /> Dominic Gaona
                </h1>
                <h4

                >
                  Front-end | Back-end Developer
                </h4>
                <Button
                  string={"Contact Me"}
                  location="/contact"
                  layout={{ fontSize: ".8rem" }}
                />
              </div>
            </div>
          </section>
  
        </div>
    </div>
  );
}
