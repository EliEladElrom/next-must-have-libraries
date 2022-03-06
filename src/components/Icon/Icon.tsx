import React, { AriaAttributes } from 'react';
import Image from 'next/image';

import { Wrapper } from './Icon.css';

export interface IconProps extends AriaAttributes {
  alt: string;
  height: number;
  iconFilename: string;
  role: string;
  width: number;
}

const Icon = ({ alt, height, iconFilename, role, width, ...other }: IconProps) => {
  const maxValue = Math.max(height, width);
  return (
    <Wrapper>
      <Image
        alt={alt}
        height={maxValue}
        role={role}
        src={`/icons/${iconFilename}`}
        width={maxValue}
        {...other}
      />
    </Wrapper>
  );
};

Icon.defaultProps = {
  role: 'img',
};

export default Icon;
