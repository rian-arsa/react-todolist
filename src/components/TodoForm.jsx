import React, { useState } from "react";
import { PropTypes } from "prop-types";

const TodoForm = ({ addTodo }) => {
  let [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    value = value.trim();

    if (!value) {
      alert("Todo list not blank");
      return;
    }

    alert(value);
    setValue = "";
  };

  return (
    <section className="container-add">
      <form action="" className="add-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="todo"
          id="add-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="add-btn">Add</button>
      </form>
    </section>
  );
};

TodoForm.proptypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;
