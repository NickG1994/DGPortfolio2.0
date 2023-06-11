import React from "react";
import style from "../styles/Loader.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Loader({ pathChange }) {
  const [loading, isLoading] = useState(false);
  console.log(loading);
  return (
    <div>
      <div
        className={style.blockContainer}
      >
        <ClipLoader
          loading={true}
          size={150}
          color="#ECB365"
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export default Loader;
