import Transition from "../Components/Transition";
import Navigation from "../Components/Navigation/Navigation";
import globalStyles from "../styles/globals.css";
import Footer from "../Components/Footer";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import style from "../styles/Transition.module.css";

import { animateOpacity } from "../data/framer-motion config";

function MyApp({ Component }) {
  const Router = useRouter();
  return (
    <div style={{ display: "flex" }}>
      {/* Navigation Component */}

      <Navigation />
      <AnimatePresence mode={"popLayout"} initial="true">
        {/*Animate the children component/pages*/}
        <motion.div
          className={style.mainContainer}
          variants={animateOpacity}
          initial={animateOpacity.initial}
          animate={animateOpacity.animate}
          exit={animateOpacity.exit}
          transition={animateOpacity.transition}
          key={Router.route}
        >
          <Component />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
