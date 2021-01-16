const alias = require("./config/alias");

module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
    "import/prefer-default-export": "off",
  },
  settings: {
    "import/resolver": {
      alias: alias.arr,
    },
  },
};
