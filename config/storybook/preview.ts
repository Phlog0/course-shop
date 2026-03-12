import type { Preview } from "@storybook/react-webpack5";

import {
  StyleDecorator,
  ThemeDecorator,
  RouterDecorator,
} from "../../src/shared/storybook/decorators";

const preview: Preview = {
  decorators: [StyleDecorator, ThemeDecorator, RouterDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    theme: "light",
  },
};

export default preview;
