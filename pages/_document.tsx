import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/@splidejs/splide@3.0.10/dist/css/splide.min.css"
          />
          <script
            defer
            src="https://unpkg.com/@splidejs/splide@3.0.10/dist/js/splide.min.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}