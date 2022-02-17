import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import TrashIcon from "./icons/TrashIcon";
import Price from "./Price";

const CartItem = ({ img, name, price, quantity }) => {
  const x = useMotionValue(0);
  const xInput = [-200, 0];
  const background = useTransform(x, xInput, [
    "rgba(246,73,73,0.125)",
    "rgba(255,255,255,0)",
  ]);
  const iconVisibility = useTransform(x, xInput, [1, 0]);
  const controls = useAnimation();

  async function handleDragEnd(_, info) {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < xInput[0] && velocity < -0.5) {
      await controls.start({
        display: "none",
        opacity: 0,
        y: "-15%",
      });
    } else {
      controls.start({
        display: "block",
        opacity: 1,
        y: 0,
      });
    }
  }

  return (
    <motion.div
      className="relative px-4 overflow-hidden"
      style={{ background }}
      animate={controls}
    >
      <motion.div
        drag="x"
        style={{ x }}
        dragDirectionLock
        dragConstraints={{
          left: -100,
          right: 0,
        }}
        dragElastic={0.5}
        dragSnapToOrigin
        onDragEnd={handleDragEnd}
        className="flex items-center justify-between space-x-2"
      >
        <motion.div
          className={`flex items-center w-full space-x-2 pointer-events-none`}
        >
          <Image src={`${img}`} alt={`${name}`} width={`96`} height={`96`} />
          <div className="flex flex-col space-y-2">
            <p>{name}</p>
            <p>{quantity}</p>
          </div>
        </motion.div>
        <Price quantity={price} />
      </motion.div>
      <AnimatePresence>
        <motion.div
          className={`absolute -translate-y-1/2 top-1/2 right-2 text-bright pointer-events-none`}
          style={{ opacity: iconVisibility }}
        >
          <TrashIcon className="text-red" />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default CartItem;

function onDelete(index: any) {
  console.log("delete", index);
}
