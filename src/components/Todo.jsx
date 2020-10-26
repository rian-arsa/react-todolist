import React from "react";
import PropTypes from "prop-types";

const Todo = ({ text, CompleteTodo, index, isCompleted }) => {
  return (
    <div className="todo" onClick={() => CompleteTodo(index)}>
      <span
        className="todo-text"
        style={{ textDecoration: isCompleted ? "line-through" : "initial" }}
      >
        {text}
      </span>
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
