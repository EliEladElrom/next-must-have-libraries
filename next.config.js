const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = {
  productionBrowserSourceMaps: true,
  excludeFile: (str) => /\*.{spec,test}.tsx/.test(str),
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'components', 'hooks'],
  },
  images: {
    disableStaticImages: true,
    // enable smaller, optimized images if supported by browser
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = withPlugins([[optimizedImages]], nextConfiguration);
