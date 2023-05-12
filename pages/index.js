import React from "react";
// import styles
import indexStyles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
/* Components */
import Form from "../Components/Form";
import Coursel from "../Components/Courasel/Coursel";
import Button from "../Components/Button";
import Modal from "../Components/Modal.js";
import { motion } from "framer-motion";
import GridGallery from "../Components/GridGallery";
/* Import SVG */
import { SVG } from "../data/SVG.js";
import { SvgHobbies } from "../data/SvgHobbies";
// import Data
import { projects } from "../data/projects_data";

const GoogleMaps = dynamic(() => import("../Components/GoogleMaps.js"), {
  ssr: false,
});

/*
import {
  textMovingDown,
  textMovingDownDelayOne,
  textMovingRight,
  textMovingUp,
  loadingVariant,
  variantsOne,
} from "../data/framer-motion config.js";
*/
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
        {/* Hero Section */}
        <section id={indexStyles.hero}>
          <div className={indexStyles.heroContainer}>
            <Coursel />
            <div className={indexStyles.courselContentContainer}>
              <h1>
                Hello,
                <br /> My name is <br /> Dominic Gaona
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Filled"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                >
                  <motion.path
                    d="M19,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H5A5.006,5.006,0,0,0,0,9v3H24V9A5.006,5.006,0,0,0,19,4ZM8.184,4A3,3,0,0,1,11,2h2a3,3,0,0,1,2.816,2Z"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{ pathLength: 0, pathOffset: 0 }}
                    transition={{
                      duration: 3,
                      ease: "easeOut",
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                  <motion.path d="M13,15a1,1,0,0,1-2,0V14H0v5a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V14H13Z" />
                </motion.svg>
              </h1>
              <h4>Front-end | Back-end Developer</h4>
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
            <h2>Portfolio</h2>
            <p>
              Proficient in developing projects using Vue.js, React.js, and
              WordPress, with experience in building, testing, and deploying.
              Skilled in innovating and designing to meet project requirements
              while maintaining a high level of technical excellence.
              Continuously enhancing technical knowledge and expertise through
              continuous learning and exploration of new technologies. Strong
              ability to work in a collaborative team environment while
              demonstrating excellent communication and problem-solving skills.
            </p>
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
              <h2>About Me</h2>
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
              <Button
                string={"learn more"}
                layout={{ marginTop: "4rem" }}
                location={"/Projects"}
              />
            </div>
            <div className={indexStyles.about__right}></div>
          </div>
        </section>

        <section id={indexStyles.skills}>
          <content className={indexStyles.skills_container}>
            <div className={indexStyles.skills__right}>
              <h2 className={indexStyles.skills__right__content}>Hobbies</h2>
              <p className={indexStyles.skills__right__content}>
                Lorem ipsum dolor sit amet consectetur. Aliquet enim viverra
                elementum justo sed etiam etiam. Enim morbi massa eu non tempor
                nascetur. Rhoncus tellus a volutpat interdum dui elementum. Nibh
                purus nulla faucibus nisi nunc arcu urna felis. Porta pretium
                dolor etiam vel tellus sit vestibulum scelerisque est. Fermentum
                lorem nibh libero urna id. Augue placerat in in faucibus in
                fames ac. Magna augue at dignissim mauris viverra tortor sit
                facilisis vitae. Amet at ante ut facilisis facilisis vitae
                varius. Tincidunt feugiat orci nec augue ut.
              </p>
              <br />
              <p className={indexStyles.skills__right__content}>
                Vel ultrices magna ullamcorper libero adipiscing. Massa in
                consequat congue scelerisque. Nibh dictum sed mi ullamcorper
                eget. Lectus vitae velit tellus sit turpis nulla nunc. Habitant
                libero purus at egestas. Proin ipsum eros fermentum volutpat.
                Dolor risus scelerisque aliquet velit sed et. Elit id
                condimentum et habitant volutpat aenean.
              </p>
              <br />
              <p className={indexStyles.skills__right__content}>
                Porttitor sagittis ullamcorper pulvinar odio nec aliquet magnis.
                Enim dapibus vestibulum ullamcorper pharetra lectus tortor vitae
                in elit. Turpis nec id faucibus non donec etiam.
              </p>
              <Button
                location={"/skills"}
                string={"Skills"}
                layout={{ marginTop: "4rem" }}
              />
            </div>
            <div className={indexStyles.skills__left}>
              <Image
                layout="responsive"
                src={require("/public/img/hobbies.png")}
                alt="hobbies image"
              />
            </div>
          </content>
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
              {/* <Form /> */}
              <Form />
            </div>
            <div className={indexStyles.contactMeContainerRight}>
              <GoogleMaps />
            </div>
          </div>
        </section>
      </content>
    </main>
  );
}
