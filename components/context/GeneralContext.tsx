import React, { createContext, useContext, useState } from "react";

// Context
export const AppContext = createContext(null);

export const GeneralContext = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [session, setSession] = useState(null);

  const fadeDown = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <AppContext.Provider
      value={{
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        fadeDown,
        isCartOpen,
        setIsCartOpen,
        cart,
        setCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}

export default GeneralContext;
