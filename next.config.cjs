/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
*/

const withPlugins = require('next-compose-plugins');

// see: https://github.com/cyrilwanner/next-optimized-images#optimization-packages
// using: yarn add imagemin-mozjpeg imagemin-optipng imagemin-svgo
const optimizedImages = require('next-optimized-images');

// https://www.npmjs.com/package/@next/bundle-analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const config = {
  // source-map-explorer with Next.js
  // see: https://nextjs.org/docs/advanced-features/source-maps
  // view with: source-map-explorer .next/static/**/*.js
  productionBrowserSourceMaps: true,
  // Build error will occurred w/ `imagemin-mozjpeg` since next Must use import to load ES Module
  // `esmExternals` flag & renaming from `next.config.js` to `next.config.cjs` will fix
  // see: https://github.com/vercel/next.js/issues/25454
  experimental: { esmExternals: true },
  excludeFile: (str) => /\*.{spec,test}.tsx/.test(str),
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'components', 'hooks'],
  },
  images: {
    disableStaticImages: true,
    // enable smaller, optimized images - when supported by browser
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = withPlugins([[optimizedImages], [withBundleAnalyzer]], config);