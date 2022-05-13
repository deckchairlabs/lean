import { Application } from "./lib/app.ts";
import { Context } from "./lib/context.ts";
import type { HTMLRewriter, ParseOptions } from "./lib/deps.ts";

export type Mode = "development" | "debug" | "production";

export type ApplicationOptions = {
  rootUrl: URL | string;
  mode: Mode;
};

export type ContextOptions<TApplication> = {
  app: TApplication;
  request: Request;
};

export type State = {
  [key: string]: unknown;
  url: URL;
};

export type CompilerOptions = {
  mode: Mode;
  parserOptions?: ParseOptions;
};

export type CompileOptions = {
  input: string;
  url: URL;
};

export type RequestHandler<TApplication = Application> = (
  context: Context<TApplication>,
) => Promise<unknown> | unknown;

export type Middleware<TApplication = Application> = (
  next: RequestHandler<TApplication>,
) => RequestHandler<TApplication>;

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
