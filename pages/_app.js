import Transition from "../Components/Transition";
import globalStyles from "../styles/globals.css";
import Footer from "../Components/Footer";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import style from "../styles/Transition.module.css";

import { animateOpacity } from "../data/framer-motion config";

function MyApp({ Component }) {
  const Router = useRouter();

  return (
    <Transition>
      <Component />
    </Transition>
  );
}

export default MyApp;
