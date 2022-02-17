import Link from "next/link";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAppContext } from "./context/GeneralContext";
import MenuIcon from "./icons/MenuIcon";

const MobileMenu = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useAppContext();

  const menuItems = [
    {
      name: "Inicio",
      href: "/",
    },
    {
      name: "Lo más reciente",
      href: "/nuevo",
    },
    {
      name: "Teclados",
      href: "/teclados",
    },
    {
      name: "Mouse",
      href: "/mouse",
    },
    {
      name: "Sillas",
      href: "/sillas",
    },
  ];

  return (
    <>
      <MenuIcon
        onClick={() => {
          setIsMobileMenuOpen(!isMobileMenuOpen);
        }}
        className="transition clickable"
      />
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed z-20 w-screen h-screen inset-0`}
          >
            <div
              className="absolute w-full h-full bg-gray-100/80 dark:bg-gray-700/80"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
            <motion.menu
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              className="flex flex-col justify-center w-[80vw] h-full bg-light dark:bg-dark max-w-[520px] p-6 divide-y divide-gray-100 dark:divide-gray-500 shadow"
            >
              {menuItems.map((item, index) => (
                <div className="flex w-full" key={`menu-item-${index}`}>
                  <Link href={`${item.href}`}>
                    <a className="flex py-6 space-x-2">
                      <span className="text-xl">{item.name}</span>
                    </a>
                  </Link>
                </div>
              ))}
            </motion.menu>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
