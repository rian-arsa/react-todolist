import { css } from "@emotion/core";

export const button = ({color}) => {
  let textColor;

  switch (color) {
    case "black":
      textColor= "black";
      break;
    case "red":
      textColor="red";
      break;
    default:
      textColor="black";
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
}