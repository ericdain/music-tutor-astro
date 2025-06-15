import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // This 'output' property is the key.
  // It tells Astro to build a static site with no server needed.
    output: "static",

    // The site and base configuration remains the same.
    // Replace 'your-github-username' with your actual GitHub username
    site: "https://ericdain.github.io",
    // Replace 'music-tutor-astro' with your repository name
    base: "/music-tutor-astro",
});