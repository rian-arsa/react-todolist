/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import { PropTypes } from "prop-types";
import { useTheme } from "emotion-theming";

// import styles from "./todoForm.module.css";
import * as styles from "./todoForm.styles";

const TodoForm = ({ addTodo, showAdd }) => {
  let [value, setValue] = useState("");
  const theme = useTheme();

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
      <section css={styles.containerAdd}>
        <form action="" css={styles.addForm} onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="todo"
            css={styles.addInput({ theme })}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button css={styles.addBtn}>Add</button>
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
