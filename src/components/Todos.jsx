import React from "react";

import Todo from "./Todo";

const todos = [
  {
    text: "Belajar"
  },
  {
    text: "Belajar Bersama pak dika"
  },
  {
    text: "Belajar Halo"
  },
  {
    text: "Belajar"
  },
  {
    text: "Belajar"
  },
  {
    text: "Belajar"
  }
];

const Todos = () => {
  return (
    <section className="container-todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
