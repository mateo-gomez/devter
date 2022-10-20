import css from "styled-jsx/css";
import { spacings } from "styles/theme";

export default css`
  div {
    display: flex;
    align-items: center;
  }

  strong {
    margin-left: ${spacings.$2};
  }
`;
