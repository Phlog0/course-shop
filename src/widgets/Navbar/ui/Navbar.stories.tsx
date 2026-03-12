import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { Navbar } from "./Navbar";

const meta = {
  title: "widgets/Navbar",
  component: Navbar,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
  parameters: {
    theme: "dark",
  },
};
