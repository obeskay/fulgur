import { motion } from "framer-motion";
import { Markup } from "interweave";
import Button from "../../components/Button";
import { useAppContext } from "../../components/context/GeneralContext";
import Price from "../../components/Price";
import ProductStars from "../../components/ProductStars";
import Slider from "../../components/Slider";
import { getProductIds, getProductById } from "../../lib/shopify";

const Index = (props) => {
  const { fadeDown } = useAppContext();
  return (
    <>
      <div className="container mx-auto space-y-6">
        <div className="grid gap-12 md:gap-12 md:grid-cols-7">
          <div className="md:sticky top-24 md:col-span-3">
            <Slider
              content={props.product?.images.edges}
              productId={props.product?.id}
            />
          </div>
          <motion.div className="space-y-6 md:col-span-4">
            <motion.div
              variants={fadeDown}
              initial="initial"
              animate="animate"
              className="flex items-center justify-between space-x-6 "
            >
              <p className="text-orange">
                ¡Se están vendiendo como pan caliente! 🤑
              </p>
              <ProductStars score={3.7} />
            </motion.div>
            <motion.div
              variants={fadeDown}
              initial="initial"
              animate="animate"
              className="flex items-center justify-between space-x-6"
            >
              <h1 className="text-bright">{`${props.product?.title}`}</h1>
              <Price
                size="lg"
                quantity={props.product?.priceRange.maxVariantPrice.amount}
              />
            </motion.div>
            <Button className={"w-full"}>¡Lo quiero!</Button>
            <motion.div className="space-y-4">
              <Markup content={props.product?.descriptionHtml} noWrap />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ params }) {
  const productId = params.id;
  const product = await getProductById(productId);

  return {
    props: { product },
  };
}

export async function getStaticPaths() {
  const routes = await getProductIds();
  console.log("routes", routes);

  return {
    paths: routes,
    fallback: true, // false or 'blocking'
  };
}

export default Index;
