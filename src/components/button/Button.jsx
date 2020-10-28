/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import {jsx} from "@emotion/core";

// import styles from "./button.module.css";
import * as styles from "./button.styles";

const Button = ({ text, onClick, color }) => {
  // const classNames = cx(styles.headerBtn, {
  //   [styles.clear]: color === "red"
  // });

  return (
    // <button className={classNames} onClick={onClick}>
    //   {text}
    // </button>
    <button css={styles.button({color})} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  color: "black"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["red", "black"])
};

export default Button;
