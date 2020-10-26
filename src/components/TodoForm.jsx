import React, { useState } from "react";
import { PropTypes } from "prop-types";

const TodoForm = ({ addTodo, showAdd }) => {
  let [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    value = value.trim();

    if (!value) {
      alert("Todo list not blank");
      return;
    }

    if (value.length > 30) {
      alert("Please create todo a shorter text");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  if (showAdd) {
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
  } else {
    return null;
  }
};

TodoForm.proptypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;
