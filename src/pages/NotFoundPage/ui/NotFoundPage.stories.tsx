import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { NotFoundPage } from "./NotFoundPage";

const meta = {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
  parameters: {
    theme: "dark",
  },
};
