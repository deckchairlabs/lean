import { Application } from "./lib/app.ts";
import { Context } from "./lib/context.ts";
import type {
  HTMLRewriter,
  ParsedImportMap,
  ParseOptions,
} from "./lib/deps.ts";
import { Router } from "./lib/router.ts";

export type Mode = "development" | "debug" | "production";

export type ApplicationOptions = {
  rootUrl: URL | string;
  importMap: ParsedImportMap;
  router?: Router;
  mode: Mode;
};

export type ContextOptions = { app: Application; request: Request };

export type State = {
  [key: string]: unknown;
  url: URL;
};

export type CompilerOptions = {
  importMap: ParsedImportMap;
  mode: Mode;
  parserOptions?: ParseOptions;
};

export type CompileOptions = {
  input: string;
  url: URL;
};

export type RequestHandler = (
  context: Context,
) => Promise<unknown> | unknown;

export type Middleware = (next: RequestHandler) => RequestHandler;

export type ResponseTransformer = ((
  response: Response,
  context: Context,
  rewriter: HTMLRewriter,
) => void | Promise<void>);

// deno-lint-ignore no-explicit-any
export type PluginOptions = Record<string, any>;

export interface Register<T = void> {
  <Options extends PluginOptions>(
    plugin: Plugin<Options>,
    options?: Options,
  ): T;
}

export type Plugin<Options extends PluginOptions = Record<never, never>> = (
  instance: Application,
  options: Options,
) => Promise<void> | void;
