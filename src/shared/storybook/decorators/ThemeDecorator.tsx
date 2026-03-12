import { Decorator } from "@storybook/react-webpack5";

export const ThemeDecorator: Decorator = (Story, { parameters }) => {
  const { theme } = parameters;

  return (
    <div className={`app ${theme || "light"}`}>
      <Story />
    </div>
  );
};
