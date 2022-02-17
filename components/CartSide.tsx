import { AnimatePresence, motion } from "framer-motion";
import CartItem from "./CartItem";
import { useAppContext } from "./context/GeneralContext";

const CartSide = () => {
  const { isCartOpen, setIsCartOpen } = useAppContext();
  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed z-20 w-screen h-screen inset-0`}
        >
          <div
            className="absolute w-full h-full bg-gray-100/80 dark:bg-gray-700/80"
            onClick={() => setIsCartOpen(!isCartOpen)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="flex flex-col justify-center w-[80vw] h-full bg-light dark:bg-dark ml-auto max-w-[520px] p-6 shadow divide-y dark:divide-gray-700 divide-gray-100"
          >
            {[...Array(6)].map((_, i) => (
              <CartItem
                key={i}
                img="/contentDemo/Mouse/MS1006/1.png"
                name="Mouse"
                price="259"
                quantity={3}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartSide;
