import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#000000"/>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Leandro da Silva website"
          />
          <link rel="apple-touch-icon" href="/images/icons/maskable_icon_x192.png"/>
          <meta name="og:title" content="iMachine" />
          <meta name="twitter:card" content="summary_large_image" />
          <title>iMachine</title>
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}
