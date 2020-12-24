const { merge } = require("webpack-merge");
const paths = require("./paths");
const CommonWebpackConfig = require("./webpack.common");

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
      {
        test: /\.html$/i,
        loader: "raw-loader",
      },
    ],
  },

  devServer: {
    contentBase: [paths.assets.assetsDir, paths.views.cacheDir],
    contentBasePublicPath: ["/assets", "/"],
    hot: true,
    open: true,
    port: 9000,
  },

  devtool: "eval-cheap-module-source-map",
});
