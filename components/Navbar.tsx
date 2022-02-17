import Link from "next/link";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import { useAppContext } from "./context/GeneralContext";
import CartIcon from "./icons/CartIcon";
import MenuIcon from "./icons/MenuIcon";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  // React state for the mobile menu
  const { setIsMobileMenuOpen, isMobileMenuOpen, setIsCartOpen, isCartOpen } =
    useAppContext();

  // React state for the scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // React hook for the scroll position
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  // React useEffect hook for the scroll position
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Navbar
    <nav
      className={`sticky top-0 z-10 flex items-center justify-between w-full p-4 my-6 transition-all ${
        scrollPosition > 49 ? "dark:bg-dark bg-light shadow" : "bg-transparent"
      }`}
    >
      {/* Menú */}
      <MobileMenu />
      {/* End of Menú */}
      {/* Logo */}
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      {/* End of Logo */}
      {/* Carrito */}
      <Cart />
      {/* End of Carrito */}
    </nav>
  );
};

export default Navbar;
