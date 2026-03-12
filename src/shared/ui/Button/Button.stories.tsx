import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { fn } from "storybook/test";
import { Button, ThemeButton } from "./Button";
const meta = {
  title: "Shared/Button",
  component: Button,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};
export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: "Clear",
  },
};
export const Outline: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    children: "Outline",
  },
};
export const DarkPrimary: Story = {
  args: {
    children: "Dark Primary",
  },
  parameters: {
    theme: "dark",
  },
};
export const DarkClear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: "Dark Clear",
  },
  parameters: {
    theme: "dark",
  },
};
export const DarkOutline: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    children: "Dark Outline",
  },
  parameters: {
    theme: "dark",
  },
};
