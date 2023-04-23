import Image from "next/image";
import React from "react";
function Custom404() {
  const svgPath = require("../assets/img/404/404.svg").default;
  return (
    <>
      <Image
        src={svgPath}
        objectFit={"cover"}
        objectPosition={"center"}
        layout={"fill"}
        priority
      />
    </>
  );
}

export default Custom404;
