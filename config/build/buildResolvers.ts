import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export function buildResolvers({
  paths,
}: BuildOptions): Configuration["resolve"] {
  return {
    // благодаря этой настройке не надо дописывать расширение файла при импорте
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": paths.src,
    },
  };
}
