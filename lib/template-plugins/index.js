const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const layouts = require("handlebars-layouts");
const paths = require("../../config/paths");
const data = require("../../src/data");
const { generatePartials } = require("./partials-generator");

exports.generateTemplatePlugins = () => {
  if (!fs.existsSync(paths.views)) {
    fs.mkdirSync(paths.views);
  }

  const templates = fs
    .readdirSync(paths.views)
    .filter((item) => item.match(/\.hbs$/i));

  const htmlPlugins = templates.map((item) => {
    const filename = `${item.replace(/\.hbs$/i, "")}.html`;

    return new HtmlWebpackPlugin({
      template: path.join(paths.cache, filename),
      filename,
      minify: false,
    });
  });

  return htmlPlugins.concat(
    new HandlebarsPlugin({
      entry: path.join(paths.views, "*.hbs"),
      output: path.join(paths.cache, "[name].html"),
      data,

      // Watch for partials
      partials: [
        path.join(paths.layout, "*.hbs"),
        path.join(paths.partials, "*.hbs"),
      ],

      onBeforeSetup: (Handlebars) => {
        // Register helpers
        Handlebars.registerHelper(layouts(Handlebars));

        // Register partials
        Handlebars.registerPartial(generatePartials(paths.layout));
        Handlebars.registerPartial(generatePartials(paths.partials));
      },
    })
  );
};
