const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    '@vue/typescript/recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-typescript/recommended',
  ],
  settings: {
    'import/resolver': {
      webpack: path.resolve(__dirname, './webpack.config.js'),
    },
  },
};
