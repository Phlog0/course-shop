import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { Sidebar } from "./Sidebar";
const meta = {
  title: "widgets/Sidebar",
  component: Sidebar,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
  parameters: {
    theme: "dark",
  },
};
