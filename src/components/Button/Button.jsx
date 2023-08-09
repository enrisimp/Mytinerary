/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ variant, className, buttonClassName, text = "Button" }) => {
  return (
    <div className={`button ${variant} ${className}`}>
      <div className={`div ${buttonClassName}`}>
        {variant === "default" && <>{text}</>}

        {variant === "line" && <div className="button-i">{text}</div>}
      </div>
    </div>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["line", "default"]),
  text: PropTypes.string,
};
