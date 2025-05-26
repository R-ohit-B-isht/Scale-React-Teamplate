import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/components/**/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/pages/**/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/layouts/**/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/App/**/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  }
};
export default config;
