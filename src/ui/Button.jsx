import { NavLink } from "react-router";
import "./Button.css";

function Button({
  children,
  onClick,
  to,
  type = "button",
  isDisabled = false,
  btnStyle, // primary secondary tertiary
  otherClass,
  customClass,
}) {
  const handleClick = (e) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  const computeClassName = ({ isActive }) => {
    const base =
      customClass ||
      `btn ${btnStyle ? `btn-${btnStyle}` : ""} ${
        otherClass ? otherClass : ""
      }`.trim();

    return `${base} ${isActive ? "active" : ""} ${
      isDisabled ? "disabled" : ""
    }`.trim();
  };

  if (to) {
    return (
      <NavLink to={to} onClick={handleClick} className={computeClassName}>
        {({ isActive }) =>
          typeof children === "function" ? children({ isActive }) : children
        }
      </NavLink>
    );
  }

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={() => onClick?.()}
      className={`${
        customClass
          ? `btn ${customClass}`
          : `btn ${btnStyle ? `btn-${btnStyle}` : ""} ${
              otherClass ? otherClass : ""
            } `
      }`.trim()}
    >
      {children}
    </button>
  );
}

export default Button;
