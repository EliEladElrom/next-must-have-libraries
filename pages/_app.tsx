/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
*/

import React from 'react';
import '../src/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from '../src/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  const PageComponent = Component as any;
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>next-must-have-libraries template</title>
      </Head>

      <PageComponent {...pageProps} />
      <GlobalStyle />
    </>
  );
}

// Enable password protection? replace default MyApp with;
// Password is set as 'password' > see pages/api/login.ts

/*
import {withPasswordProtect} from "@storyofams/next-password-protect";
export default process.env.PUBLIC_ENVIRONMENT !== 'production'
    ? withPasswordProtect(MyApp, {
      // @ts-ignore
      loginApiPath: '/login',
      cookieName: 'next-password-protect',
    })
    : MyApp;
 */

export default MyApp;
