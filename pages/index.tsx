import Product from "../components/Product";
import { getAllProducts } from "../lib/shopify";

export default function Home(props) {
  return (
    <>
      <div className="container grid grid-cols-2 gap-6 mx-auto md:grid-cols-3 ">
        {props.products.map(({ node: _ }, index) => {
          return (
            <Product
              key={`producto${_.id}`}
              name={_.title}
              img={_.featuredImage.url}
              price={_.priceRange.minVariantPrice.amount}
              priceBeforeDiscount={_.compareAtPriceRange.maxVariantPrice.amount}
              id={_.id}
              score={_.score}
            />
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: { products }, // will be passed to the page component as props
  };
}
