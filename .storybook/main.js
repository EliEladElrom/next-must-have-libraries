/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
*/

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    'storybook-addon-next-router'
  ],
  "framework": "@storybook/react"
}