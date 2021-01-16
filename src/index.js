import "core-js/stable";
import "regenerator-runtime/runtime";
import { importAll } from "@lib/import-all";
import "./js/index";
import "./scss/main.scss";

importAll(require.context("./assets/icons", true, /\.svg$/i));

if (process.env.NODE_ENV === "development") {
  importAll(require.context("./views/.cache", true, /\.html$/i));
}
