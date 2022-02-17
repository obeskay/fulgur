import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useAppContext } from "./context/GeneralContext";
import CartIcon from "./icons/CartIcon";
import Price from "./Price";
import ProductStars from "./ProductStars";

const Product = ({
  name,
  img = "",
  price = "",
  priceBeforeDiscount = "",
  id,
  score,
}) => {
  const { fadeDown } = useAppContext();
  return (
    <Link href={`/producto/[id]`} as={`/producto/${id}`}>
      <a className="mx-auto">
        <motion.div
          variants={fadeDown}
          initial={"initial"}
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.95 }}
          whileInView={"animate"}
          viewport={{
            once: true,
          }}
          className="relative cursor-pointer mx-auto h-full flex flex-col justify-between p-2 space-y-2 rounded shadow max-w-[256px] bg-light dark:bg-gradient-to-b dark:from-gray-500 dark:to-dark"
        >
          <div className="space-y-2">
            <motion.div
              className="flex items-center justify-center w-full bg-gray-100 rounded pointer-events-none dark:bg-gray-700"
              layoutId={`producto${id}-photo0`}
            >
              <Image
                src={`${img}`}
                alt={`${name}`}
                width={`256`}
                height={`256`}
              />
            </motion.div>
            <div className="flex items-start justify-between space-x-4">
              <motion.p>{name}</motion.p>
              <ProductStars score="3.5" />
            </div>
          </div>
          <div className="flex items-end justify-between space-x-4">
            {priceBeforeDiscount !== "0.0" ? (
              <div className="flex flex-col">
                <Price
                  quantity={priceBeforeDiscount}
                  size="sm"
                  className="line-through text-orange"
                />
                <Price quantity={`${price}`} />
              </div>
            ) : (
              <Price quantity={price} />
            )}

            <Button className="!p-2">
              <CartIcon className="text-light" />
            </Button>
          </div>
        </motion.div>
      </a>
    </Link>
  );
};

export default Product;
