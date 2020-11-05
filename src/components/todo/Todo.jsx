/** @jsx jsx */
import { jsx } from "@emotion/core";
// import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

// import styles from "./todo.module.css";
import * as styles from "./todo.styles";

const Todo = ({ text, CompleteTodo, index, isCompleted }) => {
  const theme = useTheme();

  return (
    <div css={styles.todo({ theme })} onClick={() => CompleteTodo(index)}>
      <span css={styles.todoText({ theme, isCompleted })}>{text}</span>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  CompleteTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired
};

export default Todo;
