import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet, injectGlobal } from "styled-components";

/* eslint-disable no-unused-expressions */
injectGlobal`
  html,
  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
  }

  * {
    box-sizing: border-box;
  }
`;
/* eslint-enable no-unused-expressions */

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    const script = `window.ENV = '${process.env.ENV || `development`}';`;
    return (
      <html lang="en-US">
        <Head>
          <title>SyncSpot - Cross promotions made simple</title>
          <meta property="og:title" content="SyncSpot" />
          <meta property="og:site_name" content="SyncSpot" />
          <meta property="og:url" content="http://www.syncspot.net" />
          <meta
            property="og:description"
            content="Award-winning AI startup that increases sales through “added value” promotions. Our patent-pending AI and automation technology reduces cost and increases effectiveness of a promotion by using real-time social data and previous purchase history. Contact us to find out more"
          />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="article:publisher"
            content="https://www.facebook.com/syncspot"
          />
          <meta
            property="og:image"
            content="http://www.syncspot.net/static/dark.png"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
            rel="stylesheet"
          />
          <script dangerouslySetInnerHTML={{ __html: script }} />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
