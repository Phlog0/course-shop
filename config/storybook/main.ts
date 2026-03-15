import { RuleSetRule } from "webpack";
import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader.ts";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader.ts";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
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
    const srcPath = path.resolve(__dirname, "..", "..", "src");

    config.resolve = config.resolve || {};
    config.resolve.modules = [...(config.resolve.modules || []), srcPath];

    config.resolve.extensions = [
      ...(config.resolve.extensions || []),
      ".ts",
      ".tsx",
    ];

    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    const fileLoaderRule = config.module.rules.find(
      (rule) =>
        typeof rule !== "string" &&
        rule?.test instanceof RegExp &&
        rule.test.test(".svg"),
    ) as RuleSetRule;

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    config.module.rules.push(buildSvgLoader());
    config.module.rules.push(buildCssLoader(true));

    return config;
  },
};
export default config;
