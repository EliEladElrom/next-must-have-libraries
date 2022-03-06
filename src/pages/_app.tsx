/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
*/

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
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
