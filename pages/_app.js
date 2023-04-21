import Transition from "../Components/Transition";
import Navigation from "../Components/Navigation/Navigation";
import globalStyles from "../styles/globals.css";
import Footer from "../Components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component }) {
  const router = useRouter();
  return (
    <div style={{ display: "flex" }}>
      {/* Navigation Component */}

      <Navigation />
      <AnimatePresence>
        <motion.main
          style={{ overflow: "hidden" }}
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Component />
        </motion.main>
      </AnimatePresence>

      {/*<Footer />*/}
    </div>
  );
}

export default MyApp;
