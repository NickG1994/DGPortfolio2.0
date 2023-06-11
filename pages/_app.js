import Transition from "../Components/Transition";
import "../styles/globals.css";
//import the animation configurations.

function MyApp({ Component, pageProps }) {

  return (
      <Transition>
        <Component />
      </Transition>
  );
}

export default MyApp;
