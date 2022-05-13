import { expandGlob, toFileUrl } from "./deps.ts";
import type { ExpandGlobOptions } from "./deps.ts";
import { readFileAndDecode } from "./utils.ts";

const extensions = [".tsx", ".ts", ".jsx", ".js"];
const globPattern = `**/*+(${extensions.join("|")})`;

export async function resolveSources(rootUrl: URL, exclude?: string[]) {
  const sources = new Map<string, string>();

  try {
    const globOptions: ExpandGlobOptions = {
      root: rootUrl.pathname,
      exclude,
    };

    for await (const file of expandGlob(globPattern, globOptions)) {
      const filepath = toFileUrl(file.path);
      const source = await readFileAndDecode(filepath);

      sources.set(String(filepath), source);
    }

    return sources;
  } catch (error) {
    throw error;
  }
}
