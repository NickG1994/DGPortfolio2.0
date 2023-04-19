import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import style from "../styles/Transition.module.css";
import { loadingVariant } from "../data/framer-motion config";

function Transition({ children }) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(false);
    });
    router.events.on("routerChangeComplete", () => {
      setLoading(true);
    });
    return () => {
      router.events.off("routeChangeStart", () => {
        setLoading(false);
      });
      router.events.off("routerChangeComplete", () => {
        setLoading(false);
      });
    };
  }, [router.asPath]);
  console.log(isLoading);

  return (
    <div style={{ overflow: "hidden" }}>
      {/*Animate the children component/pages*/}
      <AnimatePresence mode={"sync"} initial={true}>
        <motion.div
          className={style.mainContainer}
          variants={loadingVariant}
          initial={{
            opacity: 0,
            transition: {
              duration: 2,
            },
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 2,
              delay: 0.75,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 2,
              delay: 0,
            },
          }}
          key={router.asPath}
        >
          {!isLoading ? children : ""}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Transition;
