import css from "styled-jsx/css";
import { breakpoints, colors, fonts } from "../../styles/theme";
import { addOpacityToColor } from "../../styles/utils";

const backgroundColor = addOpacityToColor(colors.primary, 0.3);

export default css`
  div {
    display: grid;
    place-items: center;
    height: 100vh;
  }

  main {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 20px 3px rgb(0 0 0 / 10%);
    height: 100%;
    width: 100%;
  }

  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  }
`;

export const globalStyles = css.global`
  html,
  body {
    background-image: radial-gradient(${backgroundColor} 1px, transparent 1px),
      radial-gradient(${backgroundColor} 1px, transparent 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
  }

  * {
    box-sizing: border-box;
  }
`;
