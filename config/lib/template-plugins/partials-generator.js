const fs = require("fs");
const path = require("path");
const constants = require("./constants");

exports.generatePartials = (dir) => {
  const { templateExt } = constants;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const partials = fs
    .readdirSync(dir)
    .filter((item) => item.match(templateExt));

  const dirname = dir.split("\\").slice(-1)[0];

  const mappedPartials = partials.map((item) => {
    const name = item.replace(templateExt, "");
    const partial = `${dirname}/${name}`;

    return {
      [partial]: fs.readFileSync(path.join(dir, item), "utf8"),
    };
  });

  return Object.assign({}, ...mappedPartials);
};
