/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
*/

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../**/**/*.stories.mdx', '../**/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-addon-next-router'],
  webpackFinal: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;
    config.resolve.fallback = {
      http: false,
      https: false,
      os: false,
      timers: false,
      tty: false,
      zlib: false,
      path: false
    };
    config.module.rules.push(
        {
          test: /\.svg$/,
          enforce: 'pre',
          loader: require.resolve('@svgr/webpack'),
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        }
    );
    return config;
  },
};