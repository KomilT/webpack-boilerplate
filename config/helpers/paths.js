const path = require("path");

exports.root = process.cwd();

exports.dist = path.join(exports.root, "dist");
exports.src = path.join(exports.root, "src");

exports.assets = {
  assetsDir: path.join(exports.src, "assets"),
};

exports.views = {
  viewsDir: path.join(exports.src, "views"),
  cacheDir: path.join(exports.src, "views", "cache"),
  layoutDir: path.join(exports.src, "views", "layout"),
  partialsDir: path.join(exports.src, "views", "partials"),
};
