const path = require("path");

const root = path.join(__dirname, "../");
const dist = path.join(root, "dist");
const lib = path.join(root, "lib");
const src = path.join(root, "src");

const assets = path.join(src, "assets");
const icons = path.join(assets, "icons");

const views = path.join(src, "views");
const cache = path.join(views, ".cache");
const layout = path.join(views, "layout");
const partials = path.join(views, "partials");

module.exports = {
  root,
  dist,
  lib,
  src,
  assets,
  icons,
  views,
  cache,
  layout,
  partials,
};
