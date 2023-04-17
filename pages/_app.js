import Transition from "../Components/Transition";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer";
import globalStyles from "../styles/globals.css";
import { motion } from "framer-motion";

function MyApp({ Component }) {
  return (
    <div style={{ display: "flex" }}>
      {/* Navigation Component */}

      <Navigation />
      <Transition>
        <Component props={motion} />
        {/*<Footer />*/}
      </Transition>
    </div>
  );
}

export default MyApp;
