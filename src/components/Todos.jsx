import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";

const Todos = ({ todos, CompleteTodo }) => {
  return (
    <section className="container-todos">
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
        <div className="todo-placeholder-text">
          Add to by clicking{" "}
          <span className="add-button-placeholder-text"> Add</span> button onthe
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
