const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");
const { generateTemplatePlugins } = require("../lib/template-plugins");
const paths = require("./paths");

const templatePlugins = generateTemplatePlugins();

module.exports = {
  context: paths.src,
  entry: "./index.js",

  output: {
    path: paths.dist,
  },

  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|woff2?)$/i,
        loader: "file-loader",
        options: {
          emitFile: false,
          name: "[path][name].[ext]",
          publicPath: "/",
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

    new SVGSpritemapPlugin("src/assets/icons/**/*.svg", {
      output: {
        filename: "assets/icons.svg",
        svg4everybody: true,
      },
      sprite: {
        prefix: false,
      },
    }),
  ].concat(templatePlugins),
};
