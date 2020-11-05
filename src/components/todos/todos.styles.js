import { css } from "@emotion/core";

export const containerTodos = () => {
  return css`
    display: flex;
    flex-direction: column;
    min-height: 500px;
  `;
};

export const todoPlaceholderText = () => {
  return css`
    font-family: "Homemade Apple", cursive;
    font-size: 24px;
    text-align: center;
    padding: 19px;
  `;
};

export const addButtonPlaceholderText = () => {
  return css`
    font-size: 24px;
    font-family: "Bungee", cursive;
  `;
};
