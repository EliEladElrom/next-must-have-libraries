/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
*/

import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

export default {
  title: 'Style Guide/Colors',
};

const Grid = styled.div`
  column-gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  row-gap: 10px;
`;

const ColorBox = styled.div<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  height: 100px;
  width: 100px;
`;

export const Colors = () => (
  <Grid>
    <ThemeConsumer>
      {(theme) =>
        Object.entries(theme.colors).map(
          ([key, value]) =>
            typeof value === 'string' && <ColorBox backgroundColor={value} key={key} />
        )
      }
    </ThemeConsumer>
  </Grid>
);
