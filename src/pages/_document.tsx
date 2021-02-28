// este arquivo document carrega uma única vez

import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  componentDidMount() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("darkMode" || "");
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
