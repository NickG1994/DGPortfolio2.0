import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import style from "../styles/Transition.module.css";
import { loadingVariant } from "../data/framer-motion config";
import { SyncLoader } from "react-spinners";
import Footer from "../Components/Footer.js";

const Transition = ({ children }) => {
  const Router = useRouter();
  const [loading, setLoading] = useState(false);
  const [route, setRoute] = useState(null);
  let prevRoute = Router.route;
  function changedRoute() {
    if (prevRoute === Router.route) {
      setRoute(Router.route);
    }
    return;
  }

  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      {/*Animate the children component/pages*/}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          className={style.mainContainer}
          variants={loadingVariant}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 2,
            },
          }}
          transition={{ duration: 2 }}
          key={Router.route}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
