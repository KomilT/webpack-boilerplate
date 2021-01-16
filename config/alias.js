/* eslint-disable no-underscore-dangle */
const paths = require("./paths");

module.exports = {
  _alias: {
    "@lib": paths.lib,
    "@assets": paths.assets.assetsDir,
    "@": paths.src,
  },

  get obj() {
    return this._alias;
  },

  get arr() {
    return Object.entries(this._alias);
  },
};
