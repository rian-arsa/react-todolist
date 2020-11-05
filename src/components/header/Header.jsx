/** @jsx jsx */
import { jsx } from "@emotion/core";
// import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";
// import cx from "classnames";

import Button from "../button/Button";
// import styles from "./header.module.css";
import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  // const containerHeader = cx(styles.containerHeader);
  // const headerTitle = cx(styles.headerTitle);
  const theme = useTheme();

  return (
    <section css={styles.containerHeader}>
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
      <h1 css={styles.headerTitle({ theme })}>Todo Lists</h1>
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
