import { createContentLoader } from "vitepress";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const { join } = path;

const debug = false;

export async function generateRawHtmlFiles(siteConfig) {
  const files = await createContentLoader("**/*.md", { render: true }).load();

  const rootUrl = fileURLToPath(import.meta.url);
  const rootDir = join(path.dirname(rootUrl), "..");

  await Promise.all(
    files.map(async (file) => {
      let targetUrl = path.join(siteConfig.outDir, `${file.url}.raw.html`);

      const logUrl = targetUrl.replace(rootDir, "");
      try {
        await fs.ensureDir(path.dirname(targetUrl));
        fs.writeFileSync(targetUrl, file.html);
        if (debug) {
          siteConfig.logger.info(`File written successfully: ${logUrl}`);
        }
      } catch (err) {
        siteConfig.logger.error(`Error writing file: ${logUrl}`, err);
        console.error(err);
      }
    })
  ).then(() =>
    siteConfig.logger.info(
      `${files.length} raw html companions have been created.`
    )
  );
}

export async function generateRawManifest(siteConfig) {
  const rootUrl = fileURLToPath(import.meta.url);
  const rootDir = join(path.dirname(rootUrl), "..");
  const outDir = siteConfig.outDir;

  async function listRawHtmlFiles(dir) {
    const result = [];
    const entries = await fs
      .readdir(dir, { withFileTypes: true })
      .catch(() => []);
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        const nested = await listRawHtmlFiles(full);
        for (const n of nested) {
          result.push(n);
        }
      } else if (
        entry.isFile() &&
        entry.name.toLowerCase().endsWith(".raw.html")
      ) {
        result.push(full);
      }
    }
    return result;
  }

  const absFiles = await listRawHtmlFiles(outDir);
  const items = absFiles
    .map((abs) => {
      const rel = path.relative(outDir, abs).split(path.sep).join("/");
      return "/" + rel.replace(/^\/*/, "");
    })
    .sort((a, b) =>
      a.localeCompare(b, "en", { numeric: true, sensitivity: "base" })
    );

  const target = path.join(outDir, "raw-manifest.json");
  await fs.ensureDir(path.dirname(target));
  const payload = { generatedAt: new Date().toISOString(), items };
  await fs.writeFile(target, JSON.stringify(payload, null, 2), "utf8");
  siteConfig.logger.info(
    `raw-manifest.json written to ${target.replace(rootDir, "")}`
  );
}

