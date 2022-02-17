import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="dark:text-gray-300 bg-light text-gray-500 dark:bg-dark [-webkit-font-smoothing:antialiased] overflow-x-hidden  [user-select:none] [scroll-behavior:smooth]">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@600;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="min-h-screen pb-24">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
