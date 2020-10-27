import React, { useState } from "react";
import { PropTypes } from "prop-types";

import styles from "./todoForm.module.css";

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
      <section className={styles.containerAdd}>
        <form action="" className={styles.addForm} onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="todo"
            className={styles.addInput}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className={styles.addBtn}>Add</button>
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
