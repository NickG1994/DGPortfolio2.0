import Transition from "../Components/Transition";
import "../styles/globals.css";
//import the animation configurations.
import { animateOpacity } from "../data/framer-motion config";

function MyApp({ Component, pageProps }) {

  return (
      <Transition>
        <Component {...pageProps} />
      </Transition>
  );
}

export default MyApp;
