import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[24px]" };
const variants = {
  outline: {
    blue_gray_700_7c:
      "border-2 border-blue_gray-700_7c border-solid text-blue_gray-700",
  },
  fill: {
    blue_gray_700: "bg-blue_gray-700 text-white-A700",
    white_A700: "bg-white-A700",
  },
};
const sizes = { xs: "p-2", sm: "p-[13px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "blue_gray_700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["blue_gray_700_7c", "blue_gray_700", "white_A700"]),
};

export { Button };