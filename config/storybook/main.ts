import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader.ts";

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    // {
    //   name: "@storybook/addon-styling-webpack",
    //   options: {
    //     rules: [buildCssLoader(true)],
    //   },
    // },
  ],
  framework: "@storybook/react-webpack5",
  webpackFinal: async (config) => {
    // Вместо __dirname используем path.resolve с правильным относительным путем
    const srcPath = path.resolve(process.cwd(), "src");

    config.resolve = config.resolve || {};
    config.resolve.modules = [...(config.resolve.modules || []), srcPath];

    config.resolve.extensions = [
      ...(config.resolve.extensions || []),
      ".ts",
      ".tsx",
    ];

    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    // Добавляем правило для SCSS
    config.module.rules.push(buildCssLoader(true));

    return config;
  },
};
export default config;
