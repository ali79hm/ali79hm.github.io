import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://ali79hm.github.io",
  base: process.env.BASE_PATH || "/",
});
