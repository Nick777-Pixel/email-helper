import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate a Boxing Training Plan"
          />
          <meta
            property="og:description"
            content="Generate a Boxing Training Plan in seconds."
          />
          <meta property="og:title" content="Boxing Training Plan Generator" />
          <meta
            name="twitter:description"
            content="Generate your Generate Boxing Training Plan in seconds."
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
