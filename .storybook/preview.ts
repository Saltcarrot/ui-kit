import type { Preview } from "@storybook/react";

import '../src/assets/styles/global.pcss'
import '../src/assets/sprites/icons-sprite.svg'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
