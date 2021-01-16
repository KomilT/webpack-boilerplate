const path = require("path");

exports.root = path.join(__dirname, "../");

exports.dist = path.join(exports.root, "dist");
exports.lib = path.join(exports.root, "lib");
exports.src = path.join(exports.root, "src");

exports.assets = {
  assetsDir: path.join(exports.src, "assets"),
  iconsDir: path.join(exports.src, "assets", "icons"),
};

exports.views = {
  viewsDir: path.join(exports.src, "views"),
  cacheDir: path.join(exports.src, "views", ".cache"),
  layoutDir: path.join(exports.src, "views", "layout"),
  partialsDir: path.join(exports.src, "views", "partials"),
};
