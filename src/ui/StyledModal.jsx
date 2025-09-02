import { forwardRef } from "react";
import "./StyledModal.css";

const StyledModal = forwardRef(function StyledModal(
  { children, styledModalCustomClass },
  ref
) {
  return (
    <div
      ref={ref}
      className={`${
        styledModalCustomClass ? styledModalCustomClass : "styledModal"
      }`}
    >
      {children}
    </div>
  );
});

export default StyledModal;
