import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="frame">
        <section className="container-header">
          <button className="header-btn">Add</button>
          <h1 className="header-title">Todo Lists</h1>
          <button className="header-btn clear">Clear</button>
        </section>

        <section className="container-add">
          <form action="" className="add-form">
            <input type="text" name="todo" id="add-input" />
            <button className="add-btn">Add</button>
          </form>
        </section>

        <section className="container-todos">
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
        </section>
      </div>
    </div>
  );
}
