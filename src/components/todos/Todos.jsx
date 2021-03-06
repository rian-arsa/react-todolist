/** @jsx jsx */
import { jsx } from "@emotion/core";
// import React from "react";
import PropTypes from "prop-types";

import Todo from "../todo/Todo";
// import styles from "./todos.module.css";
import * as styles from "./todos.styles";

const Todos = ({ todos, CompleteTodo }) => {
  return (
    <section css={styles.containerTodos}>
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              CompleteTodo={CompleteTodo}
              index={index}
            />
          );
        })}
      {todos.length === 0 && (
        <div css={styles.todoPlaceholderText}>
          Add to by clicking{" "}
          <span css={styles.addButtonPlaceholderText}> Add</span> button onthe
          top left
        </div>
      )}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  CompleteTodo: PropTypes.func.isRequired
};

export default Todos;
