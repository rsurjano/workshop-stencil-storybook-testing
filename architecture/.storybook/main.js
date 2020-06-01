module.exports = {
  stories: ["../src/**/*.stories.mdx"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-jest",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
    "@storybook/addon-knobs",
    "@storybook/addon-backgrounds",
    "storybook-readme",
    "@storybook/preset-typescript",
    "@storybook/addon-docs",
  ],
};
