import clsx from "clsx";
import css from "./Button.module.css";

export const Button = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(css.btn, { [css.selected]: selected })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
