import { css } from "@emotion/core";

export const todo = ({ theme }) => {
  return css`
    position: relative;
    flex: 1 0 auto;
    text-align: center;
    max-height: 34px;
    margin: 16 0 0;
    font-family: "Homemade Apple", cursive;
    font-size: 24px;

    border-bottom: 1px solid ${theme.color.primary.red};
  `;
};

export const todoText = ({ theme, isCompleted }) => {
  return css`
    width: 100%;
    height: 50px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    text-decoration: ${isCompleted ? "line-through" : "initial"};
    color: ${theme.color.primary.black};
  `;
};
