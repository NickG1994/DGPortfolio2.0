import Transition from "../Components/Transition";
import globalStyles from "../styles/globals.css";

import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/Transition.module.css";
//import the animation configurations.
import { animateOpacity } from "../data/framer-motion config";

function MyApp({ Component, pageProps  }) {
  const Router = useRouter();

  return (
      <Transition css={styles} >
        <Component {...pageProps} Router={Router}  />
      </Transition>
  );
}

export default MyApp;
