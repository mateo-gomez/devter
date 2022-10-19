import css from "styled-jsx/css";
import { colors } from "../../styles/theme";

export default css`
  button {
    display: flex;
    align-items: center;
    background: ${colors.black};
    border: 0;
    color: ${colors.white};
    cursor: pointer;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 800;
    padding: 8px 24px;
    transition: opacity 0.3s ease;
  }

  button:hover {
    opacity: 0.7;
  }

  button > :global(svg) {
    margin-right: 8px;
  }
`;
