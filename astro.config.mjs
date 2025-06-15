import { defineConfig } from "astro/config";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
    output: "static",
    site: "https://ericdain.github.io",
    base: "/music-tutor-astro",
    integrations: [
        sentry({
            dsn: process.env.SENTRY_DSN,
            tracesSampleRate: 0,
            replaysSessionSampleRate: 0,
            replaysOnErrorSampleRate: 0,
            // Setting this option to true will send default PII data to Sentry.
            // For example, automatic IP address collection on events
            sendDefaultPii: true,
            sourceMapsUploadOptions: {
                project: "javascript-astro",
                authToken: process.env.SENTRY_AUTH_TOKEN,
        },
    }), spotlightjs()],
});