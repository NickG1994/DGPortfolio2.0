import React from "react";
import AboutStyle from "../styles/About.module.css";
import HTMLSVG from "../Components/HTMLSVG";
import { dataSVG } from "../data/SVG.js";

export default function about() {
  return (
    <div className={AboutStyle.about__container}>
      <div className={AboutStyle.about__content__container}>
        <div className={AboutStyle.about__container__left}>
          <h1>ABOUT ME</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nibh vehicula metus gravida
            gravida vel nunc eu. Massa aliquet ut sodales habitant libero
            elementum vulputate sed nunc. Nunc vel tellus sapien mauris sed
            massa a. Tortor egestas mi tortor phasellus. Feugiat quis ut porta
            maecenas a tincidunt donec ac platea. Enim pharetra arcu molestie
            purus interdum metus sodales in.
          </p>
          <br />
          <p>
            Tincidunt neque nisl scelerisque vitae orci. Est massa turpis orci
            euismod facilisis. Magna elementum nunc nunc volutpat a. Morbi amet
            amet ut iaculis hendrerit et. Dolor vitae proin in eget consequat
            interdum. Nunc rutrum donec dui ac diam amet sit tincidunt. Libero
            lacus bibendum elementum aliquet sit vestibulum praesent. Ac
            ultrices turpis scelerisque ut neque ut tellus sed. Risus vestibulum
            adipiscing gravida venenatis cras nunc egestas egestas netus.
          </p>
          <br />
          <p>
            Sem posuere id arcu rhoncus imperdiet. Non eu magna et ipsum
            hendrerit non sem semper. Quis consectetur at imperdiet ultricies id
            sed. Convallis proin in elit ante neque lorem purus aliquet est.
            Vitae viverra enim arcu etiam praesent feugiat etiam. Commodo ut
            nunc commodo sem. Viverra varius ornare arcu lacus facilisis amet.
          </p>
          <br />
          <p>
            Elit sit pharetra eget placerat sit. Consectetur neque est ultrices
            etiam aenean ut magna. Eleifend tincidunt maecenas quis elit. Ac
            erat in ac tempus sed aliquam pharetra diam sed. Laoreet risus
            adipiscing lacinia venenatis ultricies sagittis imperdiet. Leo cras
            amet lacus volutpat sit. Turpis pharetra amet suspendisse arcu sit
            dolor netus. Sapien quam maecenas netus phasellus ipsum.
          </p>
        </div>
        <div className={AboutStyle.about__container__right}>
          {dataSVG.map((svgImage, index) => (
            <span key={index} className={AboutStyle.svgWrapper}>
              <h3>{svgImage.iconName}</h3>
              <HTMLSVG key={index} svgString={svgImage.path} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
