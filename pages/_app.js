import Transition from "../Components/Transition";
import globalStyles from "../styles/globals.css";

import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import style from "../styles/Transition.module.css";
//import the animation configurations.
import { animateOpacity } from "../data/framer-motion config";

function MyApp({ Component }) {
  const Router = useRouter();

  return (
    <AnimatePresence mode='popLayout' initial={"true"} onExitComplete={() => {window.scrollTo(0,0)}}>
      <Transition>
        <Component />
      </Transition>
      </AnimatePresence>
  );
}

export default MyApp;
