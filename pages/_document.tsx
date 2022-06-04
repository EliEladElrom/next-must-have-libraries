/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
*/

import React from 'react';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props) => sheet.collectStyles(<App {...props} />),
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
    const VERSION = process.env.NEXT_PUBLIC_VERSION;
    const GIT_SHA = process.env.NEXT_PUBLIC_GIT_SHA;
    const IMAGE_TAG = process.env.NEXT_PUBLIC_IMAGE_TAG;
    const GIT_COMMIT_DATE = process.env.NEXT_PUBLIC_GIT_COMMIT_DATE;
    return (
      <Html lang="en">
        <Head>
          <meta property="og:title" content="EliElrom.com" key="title" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  <!-- Version:  ${VERSION} -->
                  <!-- Latest Commit SHA:  ${GIT_SHA} -->
                  <!-- Image:  ${IMAGE_TAG} -->
                  <!-- Timestamp:  ${GIT_COMMIT_DATE} -->
                `,
            }}
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
