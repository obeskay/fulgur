import "../styles/globals.css";
import React, { useEffect } from "react";
import { useGeneralContext } from "../components/context/GeneralContext";
import { AnimateSharedLayout, MotionConfig } from "framer-motion";
import GeneralContext from "../components/context/GeneralContext";
import MobileMenu from "../components/MobileMenu";
import Navbar from "../components/Navbar";
import CartSide from "../components/CartSide";

function MyApp({ Component, pageProps }) {
  const defaultTransition = {
    duration: 0.4,
    ease: [0.13, 0.68, 0.21, 0.96],
    stiffness: 256,
    damping: 64,
  };
  return (
    <GeneralContext>
      <MotionConfig transition={defaultTransition}>
        {/* Navbar */}
        <Navbar />
        {/* End of Navbar */}

        <Component {...pageProps} />
      </MotionConfig>
    </GeneralContext>
  );
}

export default MyApp;
