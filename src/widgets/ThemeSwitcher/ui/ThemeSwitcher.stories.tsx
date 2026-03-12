import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ThemeSwitcher } from "./ThemeSwitcher";

const meta = {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
  parameters: {
    theme: "dark",
  },
};
