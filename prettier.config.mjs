/**
 * @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options &
 *       import("@ianvs/prettier-plugin-sort-imports").PluginConfig}
 */
const config = {
    arrowParens: "always",
    printWidth: 80,
    singleQuote: false,
    jsxSingleQuote: false,
    semi: true,
    trailingComma: "all",
    tabWidth: 4,
    plugins: [
        "@ianvs/prettier-plugin-sort-imports",
        "prettier-plugin-tailwindcss",
        "prettier-plugin-astro",
    ],
    tailwindConfig: "./tailwind.config.ts",
    importOrder: ["<THIRD_PARTY_MODULES>", "", "^~/", "^[.][.]/", "^[.]/"],
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
    importOrderTypeScriptVersion: "4.4.0",
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};

export default config;
