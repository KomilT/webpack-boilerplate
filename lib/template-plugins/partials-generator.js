const fs = require("fs");
const path = require("path");

exports.generatePartials = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const partials = fs.readdirSync(dir).filter((item) => item.match(/\.hbs$/i));

  const dirname = dir.split("\\").slice(-1)[0];

  const mappedPartials = partials.map((item) => {
    const partial = `${dirname}/${item.replace(/\.hbs$/i, "")}`;

    return {
      [partial]: fs.readFileSync(path.join(dir, item), "utf8"),
    };
  });

  return Object.assign({}, ...mappedPartials);
};
