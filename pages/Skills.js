import React from "react";
import Skillstyle from "../styles/Skills.module.css";
import Image from "next/image";

function Skills() {
  return (
    <main className={Skillstyle.skills_container}>
      <div className={Skillstyle.skills_container_inner}>
        <div className={Skillstyle.left}>
          <h2>My Skills</h2>
          <p className={Skillstyle.paragraph}>
            Lorem ipsum dolor sit amet consectetur. Nibh vehicula metus gravida
            gravida vel nunc eu. Massa aliquet ut sodales habitant libero
            elementum vulputate sed nunc. Nunc vel tellus sapien mauris sed
            massa a. Tortor egestas mi tortor phasellus. Feugiat quis ut porta
            maecenas a tincidunt donec ac platea. Enim pharetra arcu molestie
            purus interdum metus sodales in.
          </p>
          <br />
          <p className={Skillstyle.paragraph}>
            Tincidunt neque nisl scelerisque vitae orci. Est massa turpis orci
            euismod facilisis. Magna elementum nunc nunc volutpat a. Morbi amet
            amet ut iaculis hendrerit et. Dolor vitae proin in eget consequat
            interdum. Nunc rutrum donec dui ac diam amet sit tincidunt. Libero
            lacus bibendum elementum aliquet sit vestibulum praesent. Ac
            ultrices turpis scelerisque ut neque ut tellus sed. Risus vestibulum
            adipiscing gravida venenatis cras nunc egestas egestas netus.{" "}
          </p>
          <br />
          <p className={Skillstyle.paragraph}>
            Sem posuere id arcu rhoncus imperdiet. Non eu magna et ipsum
            hendrerit non sem semper. Quis consectetur at imperdiet ultricies id
            sed. Convallis proin in elit ante neque lorem purus aliquet
            est.Vitae viverra enim arcu etiam praesent feugiat etiam. Commodo ut
            nunc commodo sem. Viverra varius ornare arcu lacus facilisis amet.{" "}
          </p>
        </div>
        <div className={Skillstyle.right}>
          <Image
            layout="responsive"
            src={require("../public/img/skills/Layer 1.png").default}
            loading="eager"
            className={Skillstyle.image}
            alt="skill image "
          />
        </div>
      </div>
    </main>
  );
}

export default Skills;
