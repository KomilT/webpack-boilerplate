const { merge } = require("webpack-merge");
const paths = require("./paths");
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

  devtool: "inline-source-map",
});
