import path from "path";

import type { Configuration } from "webpack";

import { buildWebpackConfig } from "./config/build/buildWebpack";
import {
  BuildMode,
  BuildPaths,
  BuildPlatform,
} from "./config/build/types/types";
interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
  platform?: BuildPlatform;
}
export default (env: EnvVariables) => {
  const buildPaths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    output: path.resolve(__dirname, "build"),
    public: path.resolve(__dirname, "public"),
    src: path.resolve(__dirname, "src"),
  };

  const config: Configuration = buildWebpackConfig({
    mode: env.mode ?? "development",
    port: env.port ?? 3000,
    paths: buildPaths,
    analyzer: env.analyzer,
    platform: env.platform ?? "desktop",
  });
  return config;
};
