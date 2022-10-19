import { generateSpacings } from "./utils";

export const breakpoints = {
  mobile: "520px",
};

export const fonts = {
  base: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, fira Sans, Sans, "Helvetica Neue",
    sans-serif`,
};

export const colors = {
  black: "#000000",
  white: "#ffffff",
  primary: "#0099ff",
  secondary: "#1c5480",
};

export const shape = {
  radius: "4px",
  rounded: "50px",
};

export const spacing = generateSpacings();
