import CartSide from "./CartSide";
import { useAppContext } from "./context/GeneralContext";
import CartIcon from "./icons/CartIcon";

const Cart = () => {
  const { isCartOpen, setIsCartOpen } = useAppContext();
  return (
    <div>
      <CartIcon
        onClick={() => {
          setIsCartOpen(!isCartOpen);
        }}
        className="transition clickable"
      />
      <CartSide />
    </div>
  );
};

export default Cart;
