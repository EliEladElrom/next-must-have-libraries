/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
*/

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withSvgr = require('@svgr/webpack');

const nextConfiguration = {
  productionBrowserSourceMaps: true,
  excludeFile: (str) => /\*.{spec,test}.tsx/.test(str),
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'components', 'hooks'],
  },
  images: {
    disableStaticImages: true,
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = withPlugins([[optimizedImages], [withSvgr]], nextConfiguration);
