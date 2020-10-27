import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Button from "../button/Button";
import styles from "./header.module.css";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const containerHeader = cx(styles.containerHeader);
  const headerTitle = cx(styles.headerTitle);

  return (
    <section className={containerHeader}>
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
      <h1 className={headerTitle}>Todo Lists</h1>
      <Button text="clear" onClick={clearTodos} color="red" />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
