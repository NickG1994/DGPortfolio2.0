import Transition from "../Components/Transition";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer";
import globalStyles from "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ display: "flex" }}>
      {/* Navigation Component */}

      <Navigation />
      <Transition>
        <Component {...pageProps} />
        {/*<Footer />*/}
      </Transition>
    </div>
  );
}

export default MyApp;
