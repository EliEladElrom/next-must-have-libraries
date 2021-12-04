import { css } from 'styled-components';

const breakpoints = {
  desktopOnly: '@media screen and (min-width: 960.99px)',
  mobile: '@media screen and (max-width: 960px)',
};

export const breakpoint =
  (key: keyof typeof breakpoints) =>
  (...args: Parameters<typeof css>) => {
    const styles = css(...args);
    return (props: { theme: { breakpoints: typeof breakpoints } }) =>
      css`
        ${props.theme.breakpoints[key]} {
          ${styles}
        }
      `;
  };

export default breakpoints;
