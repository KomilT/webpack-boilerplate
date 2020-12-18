import "core-js/stable";
import "regenerator-runtime/runtime";
import { importAll } from "@lib/import-all";
import "./scss/main.scss";

if (process.env.NODE_ENV === "development") {
  importAll(require.context("./views/cache", true, /\.html$/i));
}
