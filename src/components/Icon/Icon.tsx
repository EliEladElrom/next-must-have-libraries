import React, { AriaAttributes } from 'react';
import Image from 'next/image';

import { IconWrapper } from './Icon.css';

export interface IconProps extends AriaAttributes {
  alt: string;
  width: number;
  height: number;
  iconFilename: string;
  role: string;
}

const Icon = ({ alt, width, height, iconFilename, role, ...other }: IconProps) => {
  return (
    <IconWrapper>
      <Image
        alt={alt}
        width={width}
        height={height}
        role={role}
        src={`/icons/${iconFilename}`}
        {...other}
      />
    </IconWrapper>
  );
};

Icon.defaultProps = {
  role: 'img',
};

export default Icon;
