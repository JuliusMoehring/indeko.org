import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

export default defineConfig({
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
