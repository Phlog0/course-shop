import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { AppLink, AppLinkTheme } from "./AppLink";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {},
  tags: ["autodocs"],
  args: {
    to: "/",
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary Applink123",
    theme: AppLinkTheme.PRIMARY,
  },
};
export const Secondary: Story = {
  args: {
    children: "Secondary Applink123",
    theme: AppLinkTheme.SECONDARY,
  },
};
export const Red: Story = {
  args: {
    children: "Red Applink123",
    theme: AppLinkTheme.RED,
  },
};
export const DarkPrimary: Story = {
  args: {
    children: "Dark Primary Applink123",
    theme: AppLinkTheme.PRIMARY,
  },
  parameters: {
    theme: "dark",
  },
};
export const DarkSecondary: Story = {
  args: {
    children: "Dark Secondary Applink123",
    theme: AppLinkTheme.SECONDARY,
  },
  parameters: {
    theme: "dark",
  },
};
export const DarkRed: Story = {
  args: {
    children: "Dark Red Applink123",
    theme: AppLinkTheme.RED,
  },
  parameters: {
    theme: "dark",
  },
};
