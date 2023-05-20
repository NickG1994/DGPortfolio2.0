import React from "react";
// import styles
import indexStyles from "../styles/Home.module.css";
//import next components
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
/* Components */
import Form from "../Components/Form";
import Coursel from "../Components/Courasel/Coursel";
import Button from "../Components/Button";
import Modal from "../Components/Modal.js";
import { animate, motion } from "framer-motion";
import GridGallery from "../Components/GridGallery";
// Import component for loading images.
import ImageLoader from "../Components/ImageLoader.js";
/* Import SVG */
import { SVG } from "../data/SVG.js";
import { SvgHobbies } from "../data/SvgHobbies";
// import Data
import { projects } from "../data/projects_data";
//import framer-motion (Animation) and Animation Files
import { m, LazyMotion, domAnimation } from "framer-motion";
import {
  animateSlideDown,
  animateSlideSide,
  animateSlideLeft,
  animateSlideRight,
  animateOpacity,
} from "../data/framer-motion config.js";

const GoogleMaps = dynamic(() => import("../Components/GoogleMaps.js"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Head>
        <title>Nick - Home</title>
        <meta name="description" content="Dominic gaona's portoflio" />
        <link rel="icon" href="/img/DominicGaonaTabLogo.ico" />
        <link rel="stylsheet" href="/styles/Home.module.css"></link>
      </Head>
      {/* Main content */}
      <content className={indexStyles.mainContainer}>
        <LazyMotion features={domAnimation}>
          {/* Hero Section */}
          <section id={indexStyles.hero}>
            <div className={indexStyles.heroContainer}>
              <Coursel />
              <div className={indexStyles.courselContentContainer}>
                <m.h1
                  variants={animateSlideDown}
                  initial={animateSlideDown.initial}
                  animate={animateSlideDown.animate}
                  exit={animateSlideDown.exit}
                  transition={animateSlideDown.transition}
                >
                  Hello,
                  <br /> My name is <br /> Dominic Gaona
                </m.h1>
                <m.h4
                  variants={animateSlideDown}
                  initial={animateSlideDown.initial}
                  animate={animateSlideDown.animate}
                  exit={animateSlideDown.exit}
                  transition={{ ...animateSlideDown.transition, delay: 1.5 }}
                >
                  Front-end | Back-end Developer
                </m.h4>
                <Button
                  string={"Contact Me"}
                  location="/contact"
                  layout={{ fontSize: ".8rem" }}
                />
              </div>
            </div>
          </section>
          {/* portfolio Section */}
          {/* This is where a problem is accuring. Fix this section.  */}
          <section id={indexStyles.portfolio}>
            <div className={indexStyles.portfolioTop}>
              <m.h2
                variants={animateSlideSide}
                initial={animateSlideSide.initial}
                viewport={{ once: true }}
                whileInView={animateSlideSide.animate}
                transition={{ ...animateSlideSide.transition, delay: 0.5 }}
              >
                Portfolio
              </m.h2>
              <m.p
                variants={animateSlideSide}
                initial={animateSlideSide.initial}
                viewport={{ once: true }}
                whileInView={animateSlideSide.animate}
                transition={{ ...animateSlideSide.transition, delay: 1.5 }}
              >
                Proficient in developing projects using Vue.js, React.js, and
                WordPress, with experience in building, testing, and deploying.
                Skilled in innovating and designing to meet project requirements
                while maintaining a high level of technical excellence.
                Continuously enhancing technical knowledge and expertise through
                continuous learning and exploration of new technologies. Strong
                ability to work in a collaborative team environment while
                demonstrating excellent communication and problem-solving
                skills.
              </m.p>
            </div>
            <div className={indexStyles.portfolioBottom}>
              <div className={indexStyles.gallery}>
                {/* The gridGallery is causing the issue with further inspection. */}

                <GridGallery />
              </div>
            </div>
          </section>
          {/* About Me section skills and hobbies */}
          <section id={indexStyles.about}>
            <div className={indexStyles.about__container}>
              <div className={indexStyles.about__left}>
                <m.h2
                  variants={animateSlideSide}
                  viewport={{ once: true }}
                  initial={animateSlideSide.initial}
                  whileInView={animateSlideSide.animate}
                  transition={animateSlideSide.transition}
                >
                  About Me
                </m.h2>
                <m.p
                  variants={animateSlideSide}
                  viewport={{ once: true }}
                  initial={animateSlideSide.initial}
                  whileInView={animateSlideSide.animate}
                  transition={{ ...animateSlideSide.transition, delay: 1.5 }}
                  className={indexStyles.about__content}
                >
                  Allow me to introduce myself, your dedicated and highly
                  skilled web developer. I am passionate about crafting
                  exceptional online experiences and proficient in technologies
                  such as WordPress, React.js, CSS, JavaScript, HTML, APIs,
                  Node.js, Express.js, Vue.js, troubleshooting, and server
                  management. With a comprehensive approach to front-end and
                  back-end development, I am committed to delivering outstanding
                  results for your web projects.
                </m.p>
                <br />
                <m.p
                  variants={animateSlideSide}
                  viewport={{ once: true }}
                  initial={animateSlideSide.initial}
                  whileInView={animateSlideSide.animate}
                  transition={{ ...animateSlideSide.transition, delay: 2 }}
                  className={indexStyles.about__content}
                >
                  In front-end development, I bring creativity and meticulous
                  attention to detail to create visually stunning and
                  user-friendly interfaces. Through my expertise in HTML, CSS,
                  and JavaScript, I ensure a seamless browsing experience across
                  various devices. On the back-end, I harness the power of
                  Node.js, Express.js, and API integration to build robust and
                  scalable server-side applications. I prioritize optimization
                  and clean code, guaranteeing fast and efficient websites that
                  exceed expectations.
                </m.p>
                <br />
                <m.p
                  variants={animateSlideSide}
                  viewport={{ once: true }}
                  initial={animateSlideSide.initial}
                  whileInView={animateSlideSide.animate}
                  transition={{ ...animateSlideSide.transition, delay: 2 }}
                  className={indexStyles.about__content}
                >
                  As your dedicated web developer, I am devoted to understanding
                  your unique requirements and going above and beyond to meet
                  your needs. With a professional and enthusiastic approach, I
                  will collaborate closely with you throughout the development
                  process, ensuring that your vision is brought to life and
                  delivering a remarkable online presence for your business.
                </m.p>
                <Button
                  string={"learn more"}
                  layout={{ marginTop: "4rem" }}
                  location={"/Projects"}
                />
              </div>
              <m.div
                variants={animateSlideLeft}
                viewport={{ once: true }}
                whileInView={animateSlideLeft.animate}
                initial={animateSlideLeft.initial}
                transition={animateSlideLeft.transition}
                className={indexStyles.about__right}
              ></m.div>
            </div>
          </section>

          <section id={indexStyles.skills}>
            <content className={indexStyles.skills_container}>
              <div className={indexStyles.skills__right}>
                <m.h2
                  className={indexStyles.skills__right__content}
                  variants={animateSlideRight}
                  viewport={{ once: true }}
                  whileInView={animateSlideRight.animate}
                  initial={animateSlideRight.initial}
                  transition={animateSlideRight.transition}
                >
                  Hobbies
                </m.h2>
                <m.p
                  className={indexStyles.skills__right__content}
                  variants={animateSlideRight}
                  viewport={{ once: true }}
                  whileInView={animateSlideRight.animate}
                  initial={animateSlideRight.initial}
                  transition={{ ...animateSlideRight.transition, delay: 1.5 }}
                >
                  I am deeply passionate about several hobbies and interests
                  that enrich my life. Shrimp keeping, particularly focusing on
                  neocaridinia species, captivates my attention as I
                  meticulously create and maintain ideal aquatic environments
                  for these fascinating creatures. Additionally, I find great
                  fulfillment in exploring aquaponics, a sustainable method of
                  growing plants in a symbiotic relationship with aquatic
                  animals.
                </m.p>
                <br />
                <m.p
                  className={indexStyles.skills__right__content}
                  variants={animateSlideRight}
                  viewport={{ once: true }}
                  whileInView={animateSlideRight.animate}
                  initial={animateSlideRight.initial}
                  transition={{ ...animateSlideRight.transition, delay: 1.8 }}
                >
                  Beyond aquatics, music holds a special place in my heart,
                  allowing me to express myself and find inner peace. Whether
                  I'm strumming a guitar or playing melodies on a keyboard, the
                  creative process brings me immense joy. Furthermore, as a
                  video game enthusiast, I engage in immersive virtual worlds,
                  relishing challenging narratives, puzzles, and multiplayer
                  competitions.
                </m.p>
                <br />
                <m.p
                  className={indexStyles.skills__right__content}
                  variants={animateSlideRight}
                  viewport={{ once: true }}
                  whileInView={animateSlideRight.animate}
                  initial={animateSlideRight.initial}
                  transition={{ ...animateSlideRight.transition, delay: 1.8 }}
                >
                  Moreover, I have a strong affinity for programming and
                  problem-solving. I am continually motivated by the intricacies
                  of coding and the satisfaction of finding innovative solutions
                  to complex challenges. These diverse hobbies and interests
                  reflect my curiosity, creativity, and dedication to personal
                  growth, offering me fulfillment and constant intellectual
                  stimulation.
                </m.p>
                <Button
                  location={"/skills"}
                  string={"Skills"}
                  layout={{ marginTop: "4rem" }}
                />
              </div>
              <div className={indexStyles.skills__left}>
                <ImageLoader
                  imgSrc={require("../public/img/hobbies.png")}
                  alt={"hobbies image"}
                />
              </div>
            </content>
          </section>
          {/* Recent Work Section */}
          <section id={indexStyles.recentWork}>
            <div className={indexStyles.recentWorkContainer}>
              <div className={indexStyles.recentWorkTextContainer}>
                <m.h2
                  className={indexStyles.recentWorkHeader}
                  variants={animateSlideRight}
                  viewport={{ once: true }}
                  whileInView={animateSlideRight.animate}
                  initial={animateSlideRight.initial}
                  transition={animateSlideRight.transition}
                >
                  Recent Work
                </m.h2>
                <m.p
                  variants={animateSlideRight}
                  viewport={{ once: true }}
                  whileInView={animateSlideRight.animate}
                  initial={animateSlideRight.initial}
                  transition={{ ...animateSlideRight.transition, delay: 1.5 }}
                  className="recentSubheader"
                >
                  Lorem ipsum dolor sit amet consectetur. Orci viverra risus
                  nisi auctor dictum pharetra. Vitae in dui cursus aliquam
                  aliquet vel. Sapien aliquet molestie in massa ornare. Tellus
                  parturient ut in blandit eget odio. At dui ornare quam
                  senectus non sed eget. Egestas at in consectetur massa massa
                  pulvinar molestie vel iaculis.
                </m.p>
              </div>

              <m.div
                className={indexStyles.recentWorkGalleryContainer}
                variants={animateOpacity}
                viewport={{ once: true }}
                whileInView={animateOpacity.animate}
                initial={animateOpacity.initial}
                transition={{ ...animateOpacity.transition, delay: 2 }}
              >
                {projects.map((project, index) => {
                  if (index < 3) {
                    return (
                      <Image
                        key={index}
                        className={indexStyles.recentItems}
                        src={project.src}
                      />
                    );
                  }
                })}
              </m.div>
            </div>
          </section>
          {/* Contact Me Section */}
          <section id={indexStyles.contactMe}>
            <div className={indexStyles.contactMeContainer}>
              <div className={indexStyles.contactMeContainerLeft}>
                {/* <Form /> */}
                <Form />
              </div>
              <m.div
                className={indexStyles.contactMeContainerRight}
                variants={animateOpacity}
                viewport={{ once: true }}
                whileInView={animateOpacity.animate}
                initial={animateOpacity.initial}
                transition={animateOpacity.transition}
              >
                <GoogleMaps />
              </m.div>
            </div>
          </section>
        </LazyMotion>
      </content>
    </main>
  );
}
