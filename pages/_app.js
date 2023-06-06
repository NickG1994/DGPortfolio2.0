import Transition from "../Components/Transition";
import globalStyles from "../styles/globals.css";

import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/Transition.module.css";
//import the animation configurations.
import { animateOpacity } from "../data/framer-motion config";

function MyApp({ Component }) {
  const Router = useRouter();

  return (
      <Transition styles={styles}>
        <Component  />
      </Transition>
  );
}

export default MyApp;
