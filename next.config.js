const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [`cdn.shopify.com`],
    quality: 90,
  },
};
