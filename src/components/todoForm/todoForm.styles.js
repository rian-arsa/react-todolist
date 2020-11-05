import { css } from "@emotion/core";

export const containerAdd = () => {
  return css`
    padding: 16px;
  `;
};

export const addForm = () => {
  return css`
    display: flex;
    align-items: flex-start;
  `;
};

export const addInput = ({ theme }) => {
  return css`
    background: unset;
    border: unset;
    padding: 0 64px;

    flex: 1;

    border-bottom: 1px solid ${theme.color.primary.red};
    outline: unset;

    font-family: "Homemade Apple", cursive;
    font-size: 16px;
    text-transform: lowercase;
  `;
};

export const addBtn = () => {
  return css`
    font-size: 1.8rem;
    font-family: "Bungee", cursive;

    padding: 16px;
    padding-right: unset;
    cursor: pointer;

    background: unset;
    border: unset;
    outline: unset;
  `;
};
