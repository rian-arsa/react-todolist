import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onClick, color }) => {
  const classNames = ["header-btn", color === "red" && "clear"].join(" ");

  return (
    <button className={classNames} onClick={onClick}>
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
