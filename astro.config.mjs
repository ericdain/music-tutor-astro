import { defineConfig } from "astro/config";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://ericdain.github.io",
  base: "/music-tutor-astro",
  integrations: [sentry(), spotlightjs()],
});