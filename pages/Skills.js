import React from "react";
import Head from "next/head";
import styles from "../styles/Skills.module.css";
import Image from "next/image";
import { m, LazyMotion, domAnimation, animate } from "framer-motion";
import { animateOpacity } from "../data/framer-motion config";
import ImageLoader from "../Components/ImageLoader.js";

function Skills() {
  return (
    <LazyMotion features={domAnimation}>
      <m.main
        className={styles.skills_container}
        variants={animateOpacity}
        initial={animateOpacity.initial}
        animate={animateOpacity.animate}
        exit={animateOpacity.exit}
        transition={{ ...animateOpacity.transition, delay: 0.2 }}
      >
        <Head>
          <title>Nick - Skills</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/img/DominicGaonaTabLogo.ico" />
        </Head>

        <div className={styles.skills_container_inner}>
          <div className={styles.left}>
            <m.h2
              variants={animateOpacity}
              initial={animateOpacity.initial}
              animate={animateOpacity.animate}
              exit={animateOpacity.exit}
              transition={{ ...animateOpacity.transition, delay: 0.2 }}
            >
              My Skills
            </m.h2>
            <m.p
              className={styles.paragraph}
              variants={animateOpacity}
              initial={animateOpacity.initial}
              animate={animateOpacity.animate}
              exit={animateOpacity.exit}
              transition={{ ...animateOpacity.transition, delay: 0.4 }}
            >
              As a versatile developer proficient in front-end and back-end
              technologies, I bring a comprehensive skill set to the table. With
              expertise in Vue.js, React.js, Node.js, Express.js, JavaScript,
              HTML, CSS, and APIs, I can develop a wide range of applications.
              On the front-end, I leverage Vue.js and React.js to create
              intuitive user interfaces and interactive components, ensuring
              pixel-perfect designs and responsive layouts using HTML and CSS.
              JavaScript adds dynamic functionalities and enhances user
              experiences.
            </m.p>
            <br />
            <m.p
              className={styles.paragraph}
              variants={animateOpacity}
              initial={animateOpacity.initial}
              animate={animateOpacity.animate}
              exit={animateOpacity.exit}
              transition={{ ...animateOpacity.transition, delay: 0.8 }}
            >
              When it comes to the back-end, I excel in building robust
              server-side applications using Node.js and Express.js. Whether
              it&apos;s developing a store-front or an e-commerce solution,
              integrating payment gateways, or managing product catalogs, I have
              the skills to deliver scalable solutions. I also have experience
              in working with relational and non-relational databases, such as
              Oracle Database and MongoDB, respectively. I can design schemas,
              write SQL queries, and optimize performance in relational
              databases, while also leveraging the flexibility and scalability
              of non-relational databases for handling unstructured or
              semi-structured data.
            </m.p>
            <br />
            <m.p
              className={styles.paragraph}
              variants={animateOpacity}
              initial={animateOpacity.initial}
              animate={animateOpacity.animate}
              exit={animateOpacity.exit}
              transition={{ ...animateOpacity.transition, delay: 1 }}
            >
              Additionally, I have a knack for developing visually appealing and
              functional portfolio websites, showcasing your skills and
              projects. By blending my front-end expertise with back-end
              functionalities, I ensure a seamless user experience. Furthermore,
              I can integrate APIs, enabling features like social media
              authentication, data retrieval, and third-party integrations.
            </m.p>
            <br />
            <m.p
              className={styles.paragraph}
              variants={animateOpacity}
              initial={animateOpacity.initial}
              animate={animateOpacity.animate}
              exit={animateOpacity.exit}
              transition={{ ...animateOpacity.transition, delay: 1 }}
            >
              With my comprehensive knowledge and experience across these
              technologies, I am well-equipped to deliver high-quality,
              scalable, and customized solutions for your specific needs.
            </m.p>
          </div>
          <div className={styles.right}>
            <div className={styles.imageContainer}>
              <ImageLoader
                imgSrc={require("../assets/img/skills/bg-light.png")}
                alt="skill image"
              />
            </div>
          </div>
        </div>
      </m.main>
    </LazyMotion>
  );
}

export default Skills;
