import Transition from "../Components/Transition";
import Navigation from "../Components/Navigation/Navigation";
import globalStyles from "../styles/globals.css";
import Footer from "../Components/Footer";

function MyApp({ Component }) {
  return (
    <div style={{ display: "flex" }}>
      {/* Navigation Component */}

      <Navigation />
      <Transition>
        <Component />
        <Footer />
      </Transition>
    </div>
  );
}

export default MyApp;
