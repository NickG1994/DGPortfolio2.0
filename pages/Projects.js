import React from "react";
import Head from "next/head";
import { projects } from "../data/projects_data";
import GridGallery from "../Components/GridGallery";

function Projects() {
  return (
    <>
      <Head>
        <title>Nick - Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/DominicGaonaTabLogo.ico" />
      </Head>
      <>
        <GridGallery />
      </>
    </>
  );
}

export default Projects;
