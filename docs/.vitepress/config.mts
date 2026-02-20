import { defineConfig } from "vitepress";
import fs from "fs-extra";
import {
   generateRawHtmlFiles,
   generateRawManifest,
} from "./common";

const govukAssets = [
  {
    src: "node_modules/govuk-frontend/dist/govuk/assets/fonts/",
    dest: "docs/public/assets/fonts/",
  },
  {
    src: "node_modules/govuk-frontend/dist/govuk/assets/rebrand/images/",
    dest: "docs/public/assets/images/",
  },
];

function copyGovukAssets() {
  return {
    name: "copy-govuk-assets",
    buildStart: async () => {
      for (const { src, dest } of govukAssets) {
        await fs.copy(src, dest);
      }
    },
  };
}

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

  vite: {
    plugins: [copyGovukAssets()],
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
    // GOV.UK rebrand theme color
    [
      "meta",
      {
        name: "theme-color",
        content: "#1d70b8",
      },
    ],
    // Favicons
    [
      "link",
      {
        rel: "icon",
        sizes: "48x48",
        href: "/assets/images/favicon.ico",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        sizes: "any",
        type: "image/svg+xml",
        href: "/assets/images/favicon.svg",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/assets/images/govuk-icon-mask.svg",
        color: "#1d70b8",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/assets/images/govuk-icon-180.png",
      },
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/assets/images/manifest.json",
      },
    ],
  ],

  buildEnd: async (siteConfig) => {
    await generateRawHtmlFiles(siteConfig);
    await generateRawManifest(siteConfig);
  },
});
