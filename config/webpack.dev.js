const { merge } = require("webpack-merge");
const portFinderSync = require("portfinder-sync");
const paths = require("./paths");
const CommonWebpackConfig = require("./webpack.common");

const basePort = 8080;

module.exports = merge(CommonWebpackConfig, {
  mode: "development",

  output: {
    filename: "js/[name].js",
    pathinfo: false,
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  devServer: {
    contentBase: [paths.assets.assetsDir, paths.views.cacheDir],
    contentBasePublicPath: ["/assets", "/"],
    hot: true,
    open: true,
    overlay: true,
    port: portFinderSync.getPort(basePort),
  },

  devtool: "eval-cheap-module-source-map",
});
