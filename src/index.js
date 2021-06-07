import "core-js/stable";
import "regenerator-runtime/runtime";
import { importAll } from "@lib/importAll";
import "./js/index";
import "./scss/main.scss";

if (process.env.NODE_ENV === "development") {
  importAll(require.context("./views/.cache", true, /\.html$/i));
}

importAll(require.context("./assets/icons", true, /\.svg$/i));
