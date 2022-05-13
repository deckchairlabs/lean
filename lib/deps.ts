export { Server } from "https://deno.land/std@0.138.0/http/server.ts";
export { Node } from "https://deno.land/x/router@v2.0.1/mod.ts";
export type { Handler } from "https://deno.land/std@0.138.0/http/server.ts";

export {
  HTMLRewriter,
} from "https://deno.land/x/html_rewriter@v0.1.0-pre.15/base64.ts";
export type { Element } from "https://deno.land/x/html_rewriter@v0.1.0-pre.15/base64.ts";

export {
  parse as parseImportMap,
  resolve as resolveSpecifier,
} from "https://esm.sh/@import-maps/resolve@1.0.1";
export type { ParsedImportMap } from "https://cdn.esm.sh/v78/@import-maps/resolve@1.0.1";

export { toFileUrl } from "https://deno.land/std@0.138.0/path/mod.ts";
export { expandGlob } from "https://deno.land/std@0.138.0/fs/expand_glob.ts";
export type { ExpandGlobOptions } from "https://deno.land/std@0.138.0/fs/expand_glob.ts";

export {
  default as initSwc,
  parseSync,
  printSync,
  transformSync,
} from "https://esm.sh/@swc/wasm-web@1.2.182/wasm-web.js";
export { Visitor } from "https://esm.sh/@swc/core@1.2.182/Visitor.js";
export { cache } from "https://deno.land/x/cache@0.2.13/mod.ts";
export type {
  ParseOptions,
  Program,
  TransformConfig,
} from "https://esm.sh/@swc/core@1.2.182/types.d.ts";
