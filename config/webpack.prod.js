const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const paths = require("./paths");
const CommonWebpackConfig = require("./webpack.common");

module.exports = merge(CommonWebpackConfig, {
  mode: "production",

  output: {
    filename: "js/[name].[contenthash].js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: ["...", new CssMinimizerPlugin()],
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["**/*.txt", paths.views.cacheDir],
    }),

    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
    }),

    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [["mozjpeg"], ["pngquant"], ["gifsicle"]],
      },
    }),

    new CopyPlugin({
      patterns: [
        {
          from: "assets",
          to: "assets",
          globOptions: {
            ignore: ["**/icons", "**/.gitkeep"],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
  ],

  devtool: false,

  target: ["web", "es5"],
});
