import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
//footer and navigation component. 
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer.js";
// Framer motion config files and component.
import { AnimatePresence , motion } from "framer-motion";
import { animateOpacity } from "../data/framer-motion config";
import Loader from './Loader.js'

function Transition({ children }) {
  const Router = useRouter();
  const [pageLoading, setPageLoading] = useState(false)
  
  useEffect(() => {

    const start = () => {
      setPageLoading(true)
    }
    const end = () => {
      setPageLoading(false)
    }


    Router.events.on('routeChangeStart', start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)

    return() => {
      Router.events.off('routeChangeStart', start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  }, [Router.events])

  return (
    <div style={{display:"flex"}}>
    {/* Navigation Component */}
    <Navigation />
    <AnimatePresence mode='wait' initial='false'> 
    {pageLoading? (<div ><Loader/> </div>) :
      ( <motion.div 
        style={{width: '100%'}}      
        variants={animateOpacity} 
        initial={{opacity:1}} 
        animate={animateOpacity.animate}
        transition={animateOpacity.transition}     
        key={Router.pathname} 
      >
        {/* Animate the children component/pages */}
          {children}
        <Footer />
      </motion.div>
      )}
    </AnimatePresence>
    </div>
  );
};

export default Transition;
