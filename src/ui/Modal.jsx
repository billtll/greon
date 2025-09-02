import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";

import Overlay from "./Overlay";
import StyledModal from "./StyledModal";
import Button from "./Button";

import "./Modal.css";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => {
      open(opensWindowName);
    },
  });
}

function Window({
  children,
  name,
  needCloseBtn = true,
  overlayCustomClass,
  styledModalCustomClass,
}) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay overlayCustomClass={overlayCustomClass}>
      <StyledModal ref={ref} styledModalCustomClass={styledModalCustomClass}>
        {needCloseBtn && (
          <Button onClick={close}>
            <span className="material-symbols-rounded absolute close-btn-position">
              close
            </span>
          </Button>
        )}

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
