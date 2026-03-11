import { BuildOptions } from "../types/types";
import { removeDataTestIdBabelPlugin } from "./removeDataTestIdBabelPlugin";

// babel работает с новым синтакисом JS(X), TS(X). До этого я использовал ts-loader. Существуют еще swc-loader, esbuild-loader
export function buildBabelLoader({ mode }: BuildOptions) {
  const isDev = mode === "development";
  const isProd = mode === "production";
  const plugins = [];

  if (isProd) {
    plugins.push([
      removeDataTestIdBabelPlugin,
      {
        props: ["data-testid"],
      },
    ]);
  }
  return {
    presets: [
      ["@babel/preset-env", { targets: { node: "current" } }],
      "@babel/preset-typescript",
      [
        "@babel/preset-react",
        {
          runtime: isDev ? "automatic" : "classic",
        },
      ],
    ],
    plugins: plugins.length ? plugins : undefined,
  };
}
