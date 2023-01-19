import React, { Component, Suspense, useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import indexStyles from "../styles/Home.module.css";
const Navigation = React.lazy(() =>
  import("../Components/Navigation/Navigation")
);
import GridGallery from "../Components/GridGallery";
const Form = React.lazy(() => import("../Components/Form"));
import Coursel from "../Components/Courasel/Coursel";
import Button from "../Components/Button";
import { motion, AnimatePresence, delay } from "framer-motion";
import { projects } from "../data/projects_data";
import { SVG } from "../data/SVG.js";
import { SvgHobbies } from "../data/SvgHobbies";
import HTMLSVG from "../Components/HTMLSVG";
const GoogleMaps = React.lazy(() => import("../Components/GoogleMaps.js"));
const Modal = React.lazy(() => import("../Components/Modal.js"));
import {
  textVariantOne,
  loadingVariant,
} from "../data/framer-motion config.js";

export default function Home() {
  const [toggleModal, setToggleModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  function modal(e) {
    useEffect(() => {
      console.log(
        textVariantOne.animate +
          { ...textVariantOne.animate.transition, delay: 1 }
      );
      if (e.currentTarget) {
        setToggleModal((prev) => !prev);
        setModalIndex(e.target.id);
      }
    }, [toggleModal, modalIndex]);
  }

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
      <div id={indexStyles.main} className={indexStyles.mainContainer}>
        {/* Hero Section */}
        <section id={indexStyles.hero}>
          <div className={indexStyles.heroContainer}>
            <Coursel />
            <motion.div
              initial={loadingVariant.initial}
              animate={loadingVariant.animate}
              exit={loadingVariant.exit}
              className={indexStyles.courselContentContainer}
            >
              <motion.h1
                initial={textVariantOne.initial}
                animate={textVariantOne.animate}
                exit={textVariantOne.exit}
              >
                <span>
                  Hello,
                  <br /> My name is <br /> Dominic Gaona
                </span>
              </motion.h1>
              <motion.h4
                initial={textVariantOne.initial}
                animate={textVariantOne.animate}
                exit={textVariantOne.exit}
              >
                Front-end | Back-end Developer
              </motion.h4>
              <Button
                string={"Contact Me"}
                location="/contact"
                layout={{ fontSize: ".8rem" }}
              />
            </motion.div>
          </div>
        </section>
        {/* portfolio Section */}
        <section id={indexStyles.portfolio}>
          <>
            <div className={indexStyles.portfolioTop}>
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
            <div className={indexStyles.portfolioBottom}>
              <div className={indexStyles.gallery}>
                <GridGallery />
              </div>
            </div>
          </>
        </section>
        {/* About Me section skills and hobbies */}
        <section id={indexStyles.about}>
          <div className={indexStyles.about__container}>
            <div className={indexStyles.about__left}>
              <motion.h2
                className={indexStyles.about__title}
                initial={textVariantOne.initial}
                viewport={{
                  once: true,
                }}
                whileInView={textVariantOne.animate}
              >
                About Me
              </motion.h2>
              <p className={indexStyles.about__content}>
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
              <p className={indexStyles.about__content}>
                having a natural curiosty for the world. Along with the passion
                for learning. Is my core of me. From my work Ethics, lifestyle,
                and carrer. To my passion, hardwork, and determination. With
                having a curious mind i have always been hard on myself. When i
                failed to understand questions/topics/ect. Which is both a
                weakness and strength. While having a passion for learning with
                an inquisitive mind. Can be a useful or helpful to have in my
                field.
              </p>
              <br />
              <Button
                string={"learn more"}
                layout={null}
                location={"/Projects"}
              />
            </div>
            <div className={indexStyles.about__right}></div>
          </div>
        </section>

        <section id={indexStyles.skills}>
          <div className={indexStyles.skills__left}>
            {/*
            {SvgHobbies.map((svg, index) => (
              <motion.span key={index} className={indexStyles.svgWrapper}>
                <h3>{svg.iconName}</h3>
                <HTMLSVG key={index} svgString={svg.path} />
              </motion.span>
            ))}
            */}
          </div>
          <div className={indexStyles.skills__right}>
            <h2 className={indexStyles.skills__right__content}>Hobbies</h2>
            <p className={indexStyles.skills__right__content}>
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
            <p className={indexStyles.skills__right__content}>
              Vel ultrices magna ullamcorper libero adipiscing. Massa in
              consequat congue scelerisque. Nibh dictum sed mi ullamcorper eget.
              Lectus vitae velit tellus sit turpis nulla nunc. Habitant libero
              purus at egestas. Proin ipsum eros fermentum volutpat. Dolor risus
              scelerisque aliquet velit sed et. Elit id condimentum et habitant
              volutpat aenean.
            </p>
            <br />
            <p className={indexStyles.skills__right__content}>
              Porttitor sagittis ullamcorper pulvinar odio nec aliquet magnis.
              Enim dapibus vestibulum ullamcorper pharetra lectus tortor vitae
              in elit. Turpis nec id faucibus non donec etiam.
            </p>
          </div>
        </section>
        {/* Recent Work Section */}
        <section id={indexStyles.recentWork}>
          <div className={indexStyles.recentWorkContainer}>
            <div className={indexStyles.recentWorkTextContainer}>
              <h2 className={indexStyles.recentWorkHeader}>Recent Work</h2>
              <p className="recentSubheader">
                Lorem ipsum dolor sit amet consectetur. Orci viverra risus nisi
                auctor dictum pharetra. Vitae in dui cursus aliquam aliquet vel.
                Sapien aliquet molestie in massa ornare. Tellus parturient ut in
                blandit eget odio. At dui ornare quam senectus non sed eget.
                Egestas at in consectetur massa massa pulvinar molestie vel
                iaculis.
              </p>
            </div>
            <div className={indexStyles.recentWorkGalleryContainer}>
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
            </div>
          </div>
        </section>
        {/* Contact Me Section */}
        <section id={indexStyles.contactMe}>
          <div className={indexStyles.contactMeContainer}>
            <div className={indexStyles.contactMeContainerLeft}>
              <Form />
            </div>
            <div className={indexStyles.contactMeContainerRight}>
              <Suspense>
                {" "}
                <GoogleMaps />
              </Suspense>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
