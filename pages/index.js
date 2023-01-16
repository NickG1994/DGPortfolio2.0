import React, { Component, Suspense, useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
const Navigation = React.lazy(() =>
  import("../Components/Navigation/Navigation")
);
import GridGallery from "../Components/GridGallery";
const Form = React.lazy(() => import("../Components/Form"));
import Coursel from "../Components/Courasel/Coursel";
import Button from "../Components/Button";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects_data";
import { SVG } from "../data/SVG.js";
import { SvgHobbies } from "../data/SvgHobbies";
import HTMLSVG from "../Components/HTMLSVG";
import { duration } from "@mui/material";
const GoogleMaps = React.lazy(() => import("../Components/GoogleMaps.js"));
const Modal = React.lazy(() => import("../Components/Modal.js"));

export default function Home() {
  const [toggleModal, setToggleModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  //console.log(window.pageXOffset);
  function modal(e) {
    console.log(e.currentTarget);
    if (e.currentTarget) {
      setToggleModal((prev) => !prev);
      setModalIndex(e.target.id);
    }
  }

  const config = {
    initial: {
      opacity: 0,
      transition: {
        duration: 1,
        delay: 0,
      },
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        delay: 0.4,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Nick - Home</title>
        <meta name="description" content="Dominic gaona's portoflio" />
        <link rel="icon" href="/img/DominicGaonaTabLogo.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      {/* Main content */}
      <main id={styles.main} className={styles.mainContainer}>
        {/* Hero Section */}
        <section id={styles.hero}>
          <div className={styles.heroContainer}>
            <Coursel />
            <div className={styles.courselContentContainer}>
              <motion.h1
                initial={{
                  opacity: 0,
                  y: -100,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.75,
                    duration: 2,
                  },
                }}
                exit={{ opacity: 0 }}
              >
                <span>
                  Hello,
                  <br /> My name is <br /> Dominic Gaona
                </span>
              </motion.h1>
              <motion.h4
                initial={{
                  opacity: 0,
                  x: -100,
                  transition: { duration: 2 },
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 2, delay: 2 },
                }}
                exit={{
                  opacity: 0,
                  x: -100,
                  transition: { duration: 2, delay: 0 },
                }}
              >
                Front-end | Back-end Developer
              </motion.h4>
              <Button
                string={"Contact Me"}
                location="/contact"
                layout={{ fontSize: ".8rem" }}
              />
            </div>
          </div>
        </section>
        {/* portfolio Section */}
        <section id={styles.portfolio}>
          <div className={styles.portfolioContainer}>
            <div className={styles.portfolioTop}>
              <motion.h2
                initial={{ opacity: 0 }}
                viewport={{
                  once: true,
                }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 0,
                  },
                }}
              >
                Portfolio
              </motion.h2>
              <p>
                Each project is created using Vue.js, React.js, or word-press.
                Working with different technologies has helped me build
                confidence and the technical skills i need to design and build
                the projects. always innovating, designing, building, and
                deploying these projects. Have giving me insight on how these
                technologies work. As well as skills needed to succeed and
                thrive in a professional Programming environment.
              </p>
            </div>
            <div className={styles.portfolioBottom}>
              <div className={styles.gallery}>
                <GridGallery />
              </div>
            </div>
          </div>
        </section>
        {/* About Me section skills and hobbies */}
        <section id={styles.about}>
          <div className={styles.about__container}>
            <div className={styles.about__left}>
              <motion.h2
                className={styles.about__title}
                initial={config.initial}
                viewport={{
                  once: true,
                }}
                whileInView={config.animate}
              >
                About Me
              </motion.h2>
              <p className={styles.about__content}>
                Lorem ipsum dolor sit amet consectetur. Orci viverra risus nisi
                auctor dictum pharetra. Vitae in dui cursus aliquam aliquet vel.
                Sapien aliquet molestie in massa ornare. Tellus parturient ut in
                blandit eget odio. At dui ornare quam senectus non sed eget.
                Egestas at in consectetur massa massa pulvinar molestie vel
                iaculis. Purus cursus sit netus sagittis ultricies neque tempus
                quam proin. Nibh sit sit eu urna. Nisl viverra potenti dui
                vivamus tellus venenatis sagittis volutpat egestas. At porttitor
                fringilla at faucibus in aliquam fringilla quisque. Urna diam
                vel pellentesque dui aliquet.
              </p>
              <br />
              <p className={styles.about__content}>
                having a natural curiosty for the world. Along with the passion
                for learning. Is my core of me. From my work Ethics, lifestyle,
                and carrer. To my passion, hardwork, and determination. With
                having a curious mind i have always been hard on myself. When i
                failed to understand questions/topics/ect. Which is both a
                weakness and strength. While having a passion for learning with
                an inquisitive mind. Can be a useful or helpful to have in my '
                field.
              </p>
              <br />
              <Button
                string={"learn more"}
                layout={{ background: "var(----foreGround) !important" }}
                location={"/Projects"}
              />
            </div>
            <div className={styles.about__right}></div>
          </div>
        </section>

        <section id={styles.skills}>
          <div className={styles.skills__left}>
            {/*
            {SvgHobbies.map((svg, index) => (
              <motion.span key={index} className={styles.svgWrapper}>
                <h3>{svg.iconName}</h3>
                <HTMLSVG key={index} svgString={svg.path} />
              </motion.span>
            ))}
            
            */}
          </div>
          <div className={styles.skills__right}>
            <h2 className={styles.skills__right__content}>Hobbies</h2>
            <p className={styles.skills__right__content}>
              Lorem ipsum dolor sit amet consectetur. Aliquet enim viverra
              elementum justo sed etiam etiam. Enim morbi massa eu non tempor
              nascetur. Rhoncus tellus a volutpat interdum dui elementum. Nibh
              purus nulla faucibus nisi nunc arcu urna felis. Porta pretium
              dolor etiam vel tellus sit vestibulum scelerisque est. Fermentum
              lorem nibh libero urna id. Augue placerat in in faucibus in fames
              ac. Magna augue at dignissim mauris viverra tortor sit facilisis
              vitae. Amet at ante ut facilisis facilisis vitae varius. Tincidunt
              feugiat orci nec augue ut.
            </p>
            <br />
            <p className={styles.skills__right__content}>
              Vel ultrices magna ullamcorper libero adipiscing. Massa in
              consequat congue scelerisque. Nibh dictum sed mi ullamcorper eget.
              Lectus vitae velit tellus sit turpis nulla nunc. Habitant libero
              purus at egestas. Proin ipsum eros fermentum volutpat. Dolor risus
              scelerisque aliquet velit sed et. Elit id condimentum et habitant
              volutpat aenean.
            </p>
            <br />
            <p className={styles.skills__right__content}>
              Porttitor sagittis ullamcorper pulvinar odio nec aliquet magnis.
              Enim dapibus vestibulum ullamcorper pharetra lectus tortor vitae
              in elit. Turpis nec id faucibus non donec etiam.
            </p>
          </div>
        </section>
        {/* Recent Work Section */}
        <section id={styles.recentWork}>
          <div className={styles.recentWorkContainer}>
            <div className={styles.recentWorkTextContainer}>
              <h2 className={styles.recentWorkHeader}>Recent Work</h2>
              <p className="recentSubheader">
                Lorem ipsum dolor sit amet consectetur. Orci viverra risus nisi
                auctor dictum pharetra. Vitae in dui cursus aliquam aliquet vel.
                Sapien aliquet molestie in massa ornare. Tellus parturient ut in
                blandit eget odio. At dui ornare quam senectus non sed eget.
                Egestas at in consectetur massa massa pulvinar molestie vel
                iaculis.
              </p>
            </div>
            <div className={styles.recentWorkGalleryContainer}>
              {projects.map((project, index) => {
                if (index < 3) {
                  return (
                    <Image
                      key={index}
                      className={styles.recentItems}
                      src={project.src}
                    />
                  );
                }
              })}
            </div>
          </div>
        </section>
        {/* Contact Me Section */}
        <section id={styles.contactMe}>
          <div className={styles.contactMeContainer}>
            <div className={styles.contactMeContainerLeft}>
              <Form />
            </div>
            <div className={styles.contactMeContainerRight}>
              <Suspense>
                {" "}
                <GoogleMaps />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
