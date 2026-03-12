import { Decorator } from "@storybook/react-webpack5";
import "shared/config/i18n/i18nForTests";
// import "shared/config/i18n/i18n";
export const I18nDecorator: Decorator = (Story, { parameters }) => {
  const { theme } = parameters;

  return (
    <div className={`app ${theme || "light"}`}>
      <Story />
    </div>
  );
};
