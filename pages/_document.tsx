import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate a Boxing Workout Plan"
          />
          <meta
            property="og:description"
            content="Generate a Boxing Workout Plan in seconds."
          />
          <meta property="og:title" content="Boxing Workout Plan Generator" />
          <meta
            name="twitter:description"
            content="Generate your Generate Boxing Workout Plan in seconds."
          />
          <meta
            property="og:image"
            content=" "
          />
          <meta
            name="twitter:image"
            content=" "
          />
          {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6121888364111270"
     crossOrigin="anonymous"></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
