// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from "@chakra-ui/react";
const theme = {
  colors: {
    primary: "rebeccapurple",
  },
  fonts: {
    body: `"Silkscreen", monospace`,
    heading: `"Silkscreen", monospace`,
    // mono: "",
  },
  fontSizes: {
    md: "1.5rem",
    lg: "2rem",
    xl: "2.5rem",
  },
};

export default extendTheme(theme);
