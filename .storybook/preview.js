/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
*/

import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as NextImage from 'next/image';
import GlobalStyle from '../src/styles/GlobalStyle';
import theme from '../src/styles/theme';
import { RouterContext } from "next/dist/shared/lib/router-context";

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^(on|handle)[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Style Guide', 'Components', 'Pages'],
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story) => {
    return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
    );
  },
];