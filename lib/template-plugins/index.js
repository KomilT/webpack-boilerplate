const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const layouts = require("handlebars-layouts");
const paths = require("../../config/paths");
const data = require("../../src/data");
const { generatePartials } = require("./partials-generator");

exports.generateTemplatePlugins = () => {
  const { viewsDir, cacheDir, layoutDir, partialsDir } = paths.views;

  if (!fs.existsSync(viewsDir)) {
    fs.mkdirSync(viewsDir);
  }

  const templates = fs
    .readdirSync(viewsDir)
    .filter((item) => item.match(/\.hbs$/i));

  const htmlPlugins = templates.map((item) => {
    const filename = `${item.replace(/\.hbs$/i, "")}.html`;

    return new HtmlWebpackPlugin({
      template: path.join(cacheDir, filename),
      filename,
    });
  });

  return htmlPlugins.concat(
    new HandlebarsPlugin({
      entry: path.join(viewsDir, "*.hbs"),
      output: path.join(cacheDir, "[name].html"),
      data,

      // Watch for partials
      partials: [
        path.join(layoutDir, "*.hbs"),
        path.join(partialsDir, "*.hbs"),
      ],

      onBeforeSetup: (Handlebars) => {
        // Register helpers
        Handlebars.registerHelper(layouts(Handlebars));

        // Register partials
        Handlebars.registerPartial(generatePartials(layoutDir));
        Handlebars.registerPartial(generatePartials(partialsDir));
      },
    })
  );
};
