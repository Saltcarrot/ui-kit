import type { StorybookConfig } from "@storybook/react-webpack5";
import { resolve } from 'path'

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
  docs: {
    autodocs: "tag",
  },
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.pcss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            implementation: require('postcss'),
            postcssOptions: {
              config: resolve(__dirname, '../postcss.config.js'),
            },
          },
        }
      ]
    })

    return config
  }
};
export default config;
