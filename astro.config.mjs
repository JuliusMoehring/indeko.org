import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

export default defineConfig({
    site: "https://juliusmoehring.github.io",
    base: "indeko.org",
    env: {
        schema: {
            VERSION: envField.string({ context: "server", access: "public" }),
        },
    },
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [sitemap(), svelte()],
});
