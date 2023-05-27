import React from "react";
import AboutStyle from "../styles/About.module.css";
import HTMLSVG from "../Components/HTMLSVG";
import { dataSVG } from "../data/SVG.js";

//import framer motion and animation files
import { m, LazyMotion, domAnimation } from "framer-motion";
import { animateOpacity } from "../data/framer-motion config";

export default function about() {
  return (
    <LazyMotion features={domAnimation}>
      <div className={AboutStyle.about__container}>
        <div className={AboutStyle.about__content__container}>
          <div className={AboutStyle.about__container__left}>
            <m.h1
              variants={animateOpacity}
              initial={animateOpacity.initial}
              animate={animateOpacity.animate}
              exit={animateOpacity.exit}
              transition={{ ...animateOpacity.transition, delay: 0.2 }}
            >
              ABOUT ME
            </m.h1>
            <m.p
              variants={animateOpacity}
              initial={animateOpacity.initial}
              animate={animateOpacity.animate}
              exit={animateOpacity.exit}
              transition={{ ...animateOpacity.transition, delay: 0.4 }}
            >
              Lorem ipsum dolor sit amet consectetur. Nibh vehicula metus
              gravida gravida vel nunc eu. Massa aliquet ut sodales habitant
              libero elementum vulputate sed nunc. Nunc vel tellus sapien mauris
              sed massa a. Tortor egestas mi tortor phasellus. Feugiat quis ut
              porta maecenas a tincidunt donec ac platea. Enim pharetra arcu
              molestie purus interdum metus sodales in. Tincidunt neque nisl
              scelerisque vitae orci. Est massa turpis orci euismod facilisis.
              Magna elementum nunc nunc volutpat a. Morbi amet amet ut iaculis
              hendrerit et. Dolor vitae proin in eget consequat interdum. Nunc
              rutrum donec dui ac diam amet sit tincidunt.
            </m.p>
            <br />
            <m.p
              variants={animateOpacity}
              initial={animateOpacity.initial}
              animate={animateOpacity.animate}
              exit={animateOpacity.exit}
              transition={{ ...animateOpacity.transition, delay: 0.6 }}
            >
              Libero lacus bibendum elementum aliquet sit vestibulum praesent.
              Ac ultrices turpis scelerisque ut neque ut tellus sed. Risus
              vestibulum adipiscing gravida venenatis cras nunc egestas egestas
              netus. Sem posuere id arcu rhoncus imperdiet. Non eu magna et
              ipsum hendrerit non sem semper. Quis consectetur at imperdiet
              ultricies id sed. Convallis proin in elit ante neque lorem purus
              aliquet est.
            </m.p>
            <br />
            <m.p
              variants={animateOpacity}
              initial={animateOpacity.initial}
              animate={animateOpacity.animate}
              exit={animateOpacity.exit}
              transition={{ ...animateOpacity.transition, delay: 0.8 }}
            >
              Vitae viverra enim arcu etiam praesent feugiat etiam. Commodo ut
              nunc commodo sem. Viverra varius ornare arcu lacus facilisis
              amet.Quis consectetur at imperdiet ultricies id sed. Convallis
              proin in elit ante neque lorem purus aliquet est.
            </m.p>
          </div>
          <div className={AboutStyle.about__container__right}>
            {dataSVG.map((svgImage, index) => (
              <m.span key={index} className={AboutStyle.svgWrapper}>
                <h3>{svgImage.iconName}</h3>
                <HTMLSVG key={index} svgString={svgImage.path} />
              </m.span>
            ))}
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
