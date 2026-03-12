import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { fn } from "storybook/test";
import { Button, ThemeButton } from "./Button";

const meta = {
  title: "Shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
  },
};
