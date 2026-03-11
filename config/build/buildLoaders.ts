import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import { buildBabelLoader } from "./babel/buildBabelLoader";
export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const cssLoader = {
    loader: "css-loader",
    options: {
      // При namedExport: false в модуле будет создаваться переменная classes c хешированными именами, и ее можно экспортировать: import style from my.scss. При namedExport: true модуль экспортируется: import * as style from my.css https://ru.stackoverflow.com/questions/1580408/%D0%9F%D0%BE%D0%BB%D1%83%D1%87%D0%B0%D1%8E-undefined-%D0%BF%D1%80%D0%B8-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8-scss-module
      modules: {
        // Например у меня есть index.scss. Он не модульный, но модульная обработка сделает превратит название класса в hash, а я не хочу. Так название классов в модуле будут как хэш, а вот глобальные классы (index.scss) останутся теми же.
        auto: /\.module\.\w+$/i,
        namedExport: false,
        localIdentName: isDev
          ? "[path][name]__[local]--[hash:base64:5]"
          : "[hash:base64:8]",
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,

      cssLoader,
      "sass-loader",
    ],
  };

  const assetLoader = {
    test: /\.(png|jpe?g|gif|woff2?)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  };

  const tsLoader = {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [
      {
        loader: "ts-loader",
        options: {
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: true,
        },
      },
    ],
  };

  const _babelLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",

      options: buildBabelLoader(options),
    },
  };

  return [assetLoader, svgLoader, scssLoader, tsLoader];
}
