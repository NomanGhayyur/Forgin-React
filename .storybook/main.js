const custom = require('../webpack.config.js');

module.exports = {
  "stories": ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-docs"],
  "framework": "@storybook/react",
  core: {
    builder: "webpack5"
  },
  // webpackFinal: async (config) => {
  //   return { ...config, module: { ...config.module, rules: custom.module.rules } };
  // }
};