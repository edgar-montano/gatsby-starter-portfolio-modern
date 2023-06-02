import type { Preview } from "@storybook/react";
const theme = require("../src/@chakra-ui/gatsby-plugin/theme");

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        chakra: {
            theme,
        },
    },
};

export default preview;
