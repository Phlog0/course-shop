import { Configuration } from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/types";
export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths } = options;
  const isDev = options.mode === "development";
  return {
    mode: mode ?? "development",
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: `[name].${isDev ? "dev" : "prod"}.[contenthash].js`,
      clean: true,
    },

    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    // https://webpack.js.org/configuration/devtool/
    devtool: isDev && "inline-source-map",
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
