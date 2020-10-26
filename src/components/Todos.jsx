import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";

const Todos = ({ todos, CompleteTodo }) => {
  return (
    <section className="container-todos">
      {todos.map((todo, index) => {
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
