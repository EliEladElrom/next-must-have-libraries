/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
*/

import React from 'react';
import styled, { FlattenSimpleInterpolation, ThemeConsumer } from 'styled-components';

export default {
    title: 'Style Guide/Typography',
};

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.02rem;
  line-height: 2.5rem;
`;

const P = styled.p<{ interpolation: FlattenSimpleInterpolation }>`
  ${(props) => props.interpolation}
  margin: 10px 0;
`;

export const Playfair = () => (
    <div>
        <Heading>Heading</Heading>
        <ThemeConsumer>
            {(props) => (
                <>
                    <P interpolation={props.typography.typeStyleSerifText1}>Text Heading</P>
                </>
            )}
        </ThemeConsumer>
    </div>
);