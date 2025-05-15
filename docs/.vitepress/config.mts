import { defineConfig } from "vitepress";
import { generateRawHtmlFiles, copyFontFiles } from "./common";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "APAS",
  description: "Documentation for APAS",

  appearance: {
    // @ts-expect-error not fully supported yet
    initialValue: "light",
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  ignoreDeadLinks: true,

  themeConfig: {
    search: {
      provider: "local",
    },
  },

  rewrites: {
    "terms-and-conditions.md":
      "calculator/latest/en/content/3-terms-and-conditions.md",
    "calculator/latest/en/terms-and-conditions.md":
      "calculator/latest/en/content/3-terms-and-conditions.md",
  },

  head: [
    [
      "meta",
      {
        name: "robots",
        content: "noindex,nofollow",
      },
    ],
  ],

  buildEnd: async (siteConfig) => {
    await generateRawHtmlFiles(siteConfig);
    await copyFontFiles(siteConfig);
  },
});
