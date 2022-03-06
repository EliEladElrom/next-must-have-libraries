/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
*/

import { createGlobalStyle } from 'styled-components';

import colors from './colors';
import Playfair from './Playfair';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${colors.black};
    font-size: 62.5%;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  
  ${Playfair}
`;

export default GlobalStyle;
