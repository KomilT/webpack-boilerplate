const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const { generateTemplatePlugins } = require("../lib/template-plugins");
const paths = require("./paths");

const templatePlugins = generateTemplatePlugins();

module.exports = {
  context: paths.src,
  entry: "./index.js",

  output: {
    path: paths.dist,
    publicPath: "",
  },

  module: {
    rules: [
      {
        // images
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: paths.assets.iconsDir,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
      {
        // svg sprite
        test: /\.svg$/i,
        include: paths.assets.iconsDir,
        loader: "svg-sprite-loader",
        options: {
          outputPath: "",
        },
      },
      {
        // fonts
        test: /\.woff2?$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            root: paths.src,
          },
        },
      },
    ],
  },

  resolve: {
    alias: {
      "@lib": paths.lib,
      "@assets": paths.assets.assetsDir,
      "@": paths.src,
    },
    fallback: {
      path: require.resolve("path-browserify"),
    },
  },

  plugins: [
    new ESLintPlugin(),
    new StylelintPlugin(),
    new SpriteLoaderPlugin(),
  ].concat(templatePlugins),
};
