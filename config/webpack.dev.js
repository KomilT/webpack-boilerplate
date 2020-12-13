const { merge } = require("webpack-merge");
const paths = require("./helpers/paths");
const CommonWebpackConfig = require("./webpack.common");

module.exports = merge(CommonWebpackConfig, {
  mode: "development",

  output: {
    filename: "js/[name].js",
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  devServer: {
    contentBase: [paths.views.cacheDir],
    watchContentBase: true,
    hot: true,
    open: true,
    port: 9000,
  },

  devtool: "inline-source-map",
});
