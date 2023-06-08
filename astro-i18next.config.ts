import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
    defaultLocale: "en",
    locales: ["en", "de"],
    routes: {
        de: {
            about: "ueber-mich",
        },
    },
    i18nextServer: {
        debug: false,
    },
};

export default config;