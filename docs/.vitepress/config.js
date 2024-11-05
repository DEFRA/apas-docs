import { createContentLoader } from 'vitepress'
import { defineConfig } from 'vitepress'
import fs from 'fs-extra'
import path from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "-",
  description: "-",


  /**
   * Add a section in the head preventing indexation by search engines
   */
  async transformHead(ctx) {
    // <meta name="robots" content="noindex"></meta>
    return [
      [
        'meta',
        {
          name: 'robots',
          content: 'noindex',
        }
      ]
    ];
  },

  /**
   * Add a buildEnd build hook generating a raw html for each page.
   */
  async buildEnd(siteConfig) {
    const files = await createContentLoader('**/*.md', { render: true }).load();

    await Promise.all(files.map(async (file) => {
        let targetUrl = path.join(siteConfig.outDir, file.url.replace(/\.html$/, '.raw.html'));

        siteConfig.logger.info(file.url + " => " + targetUrl);

        fs.writeFile(targetUrl, file.html);
    }));

    siteConfig.logger.info(files.length + " JSON companions have been created.");

    /*
     * Early 2024 the file structure of this repository has changed. It now provides support for multiple products, versions and languages.
     * The old file structure provided files for Calculator and Archive, and in order to prevent a release dependency between Calculator, Register (in NL and UK) and this repository
     * the files are copied from the new structure to the old output location during the build (to prevent duplication in the source).
     * Once the products are released in production and point to the new file structure, this code block can be removed.
     */
    async function makeBackwardsCompatible(oldPath, newPath) {
      const backwardsCompatibleFiles = await createContentLoader(oldPath + '**/*.md', {render: true}).load();
      await Promise.all(backwardsCompatibleFiles.map(async (file) => {
        let targetUrl = path.join(siteConfig.outDir, file.url.replace(oldPath, newPath).replace(/\.html$/, '.raw.html'));
        siteConfig.logger.info(file.url + " => " + targetUrl);
        await fs.ensureDir(path.dirname(targetUrl));
        fs.writeFile(targetUrl, file.html);
      }));
      siteConfig.logger.info(backwardsCompatibleFiles.length + " backwards compatible output files have been created.");
    }
    await makeBackwardsCompatible("/calculator/latest/en/", "");
    await makeBackwardsCompatible("/register/latest/en/pages/", "/pages/register/");
  }

  /* (alternative to the above)
  async transformHtml(code, id, context) {
    let targetUrl = path.join(id.replace(/\.html$/, '.raw.html'));

    context.siteConfig.logger.info(context.page + " => " + targetUrl);
    context.siteConfig.logger.info(id + " => " + context.content);

    await fs.writeFile(targetUrl, context.content);
  },
  */
});
