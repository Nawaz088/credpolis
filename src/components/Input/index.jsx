import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const shapes = {
  round: "rounded-[10px]",
  roundLG: "rounded-[10px]", // Adjusted roundLG to match the round shape
};
const commonSizes = {
  xs: "pb-[17px] pt-5 px-[17px]",
  xsLG: "pb-5 pt-[19px] px-[19px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      size = "xs",
      variant = "fill",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    const shapeClass = shapes[shape] || "";
    const sizeClass = size === "xs" ? commonSizes.xs : commonSizes.xsLG;
    const variantClass =
      variant === "fill" ? `bg-${color} text-gray-900` : `border-${color} border-solid border-2`;

    return (
      <>
        <div className={`${wrapClassName} ${shapeClass} ${variantClass} ${sizeClass}`}>
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round", "roundLG"]),
  size: PropTypes.oneOf(["xs", "xsLG"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.node,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  errors: PropTypes.arrayOf(PropTypes.string),
};

export { Input };