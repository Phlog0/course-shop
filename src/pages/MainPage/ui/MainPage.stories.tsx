import type { Meta, StoryObj } from "@storybook/react-webpack5";
import MainPage from "./MainPage";

const meta = {
  title: "pages/MainPage",
  component: MainPage,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
  parameters: {
    theme: "dark",
  },
};
