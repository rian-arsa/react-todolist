import { css } from "@emotion/core";

export const containerHeader = () => {
  return css`
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: flex-start;
  `;
};

export const headerTitle = ({ theme }) => {
  return css`
    font-size: 3.6rem;
    font-family: "Homemade Apple", cursive;
    text-transform: lowercase;
    color: ${theme.color.primary.black};
  `;
};
