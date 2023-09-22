import { css } from "styled-components";

// media Queries generated
const media = {
  desktop: (...args) => css`
    @media (min-width: 1024px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 1023px) {
      ${css(...args)}
    }
  `,
  mobile: (...args) => css`
    @media (max-width: 767px) {
      ${css(...args)}
    }
  `,
};
// theme colors
const Black = "#252525";
const Green = "#009821";
const Orange = "#FF5500";
const Light_orange = "#F48518";
const Grey = "#F8F9FB";
const DarkGrey = "#ccc";
const Yellow = "#FFFF00";
const White = "#ffffff";

const colors = { Black, Green, Orange, Light_orange, Grey , DarkGrey, Yellow ,White};

export { media, colors };
