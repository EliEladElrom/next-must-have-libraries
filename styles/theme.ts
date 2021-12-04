import * as typography from './typography';
import breakpoints from './breakpoints';
import colors from './colors';

const theme = {
  breakpoints,
  colors,
  typography,
};

export type Theme = typeof theme;

export default theme;
