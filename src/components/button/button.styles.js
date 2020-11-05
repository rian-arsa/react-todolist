import { css } from "@emotion/core";

export const button = ({ color, theme }) => {
  let textColor;

  const {
    color: { primary }
  } = theme;

  switch (color) {
    case "black":
      textColor = primary.black;
      break;
    case "red":
      textColor = primary.red;
      break;
    default:
      textColor = primary.black;
      break;
  }

  return css`
    font-size: 1.8rem;
    font-family: "Bungee", cursive;
    padding: 16px;
    cursor: pointer;
    background: unset;
    border: unset;
    outline: unset;
    color: ${textColor};
  `;
};
