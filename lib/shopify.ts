const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

async function ShopifyData(query) {
  const URL = `https://${domain}.myshopify.com/api/2022-01/graphql.json`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error("Products not fetched");
  }
}

export async function getAllProducts() {
  const query = `
  {
    products(first: 25) {
      edges {
        node {
          id
          title
          priceRange{
            maxVariantPrice{
              amount
            }
            minVariantPrice{
              amount
            }
          }
          compareAtPriceRange{
            maxVariantPrice{
              amount
            }
            minVariantPrice{
              amount
            }
          }
          featuredImage {
            url
            altText
          }
        }
      }
    }
  }
`;

  const response = await ShopifyData(query);

  const allProducts = response.data.products.edges
    ? response.data.products.edges
    : [];

  return allProducts;
}

export async function getProductById(id: string) {
  const query = `
  {
    product(id: "${id}") {
      id
      title
      priceRange {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
      compareAtPriceRange {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
      images(first: 10) {
        edges {
          node {
            url
            altText
          }
        }
      }
      descriptionHtml
    }
  }  
`;

  const response = await ShopifyData(query);
  const product = response.data.product;

  return product;
}

export async function getProductIds() {
  const query = `
  {
    products(first: 25) {
      edges{
        node{
          id
        }
      }
    }
  }  
`;

  const response = await ShopifyData(query);
  let productIds = [];
  response.data.products.edges.map((_, i) => {
    productIds[i] = { params: { id: _.node.id } };
  });

  return productIds;
}
