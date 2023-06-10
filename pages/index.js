import React from "react";
import Head from "next/head";
import IndexContext from "../Components/IndexContext";

export default function Home({Router}) {
  console.log(Router)
  return (
    <>
      <Head>
        <title>Nick - Home</title>
        <link rel="icon" href="/img/DominicGaonaTabLogo.ico" />
        <meta name="description" content="I am a dedicated and highly skilled web developer specializing in WordPress, 
        React.js, CSS, JavaScript, HTML, APIs, Node.js, Express.js, Vue.js, troubleshooting, and server management. 
        Contact me for outstanding web development results." />
        <meta name="keywords" content="web developer, WordPress, React.js, CSS, JavaScript, HTML, APIs, Node.js, Express.js, Vue.js, troubleshooting, server management" />
        <meta name="author" content="Dominic Gaona" />

        {/*Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spiffy-mermaid-40ea97.netlify.app/" />
        <meta property="og:title" content="Hello, My name is Dominic Gaona" />
        <meta property="og:description" content="I am a dedicated and highly skilled web developer specializing in WordPress, React.js, CSS, JavaScript, HTML, APIs, Node.js, Express.js, Vue.js, troubleshooting, and server management. Contact me for outstanding web development results." />
        <meta property="og:image" content="/img/DominicGaonaTabLogo.ico" />

        {/* Twitter */}
        <meta property="twitter:card" content="/img/DominicGaonaTabLogo.ico" />
        <meta property="twitter:url" content="https://spiffy-mermaid-40ea97.netlify.app/" />
        <meta property="twitter:title" content="Hello, My name is Dominic Gaona" />
        <meta property="twitter:description" content="I am a dedicated and highly skilled web developer specializing in WordPress, React.js, CSS, JavaScript, HTML, APIs, Node.js, Express.js, Vue.js, troubleshooting, and server management. Contact me for outstanding web development results." />
        <meta property="twitter:image" content="/img/DominicGaonaTabLogo.ico" />
      </Head>
      {/* Main content */}
          <IndexContext /> 

    </>
  );
}
