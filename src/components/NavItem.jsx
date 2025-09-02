import Button from "../ui/Button";
import Modal from "../ui/Modal";

function NavItem({
  children,
  buttonClass,
  to,
  noNavigate = true,
  isModalBtn = false,
  modalId,
  modalContent,
  modalCloseBtn = true,
  overlayCustomClass,
  styledModalCustomClass,
  onClick,
}) {
  const commonButtonProps = {
    customClass: buttonClass,
    onClick,
  };

  const modalWindow = {
    name: modalId,
    needCloseBtn: modalCloseBtn,
    overlayCustomClass,
    styledModalCustomClass,
  };

  // 1. 如果是 Modal 按鈕
  if (isModalBtn && noNavigate) {
    return (
      <Modal>
        <Modal.Open opens={modalId}>
          <Button {...commonButtonProps}>{children}</Button>
        </Modal.Open>
        <Modal.Window {...modalWindow}>{modalContent}</Modal.Window>
      </Modal>
    );
  }

  // 2. 如果是 NavLink
  if (to && !noNavigate) {
    return (
      <Button {...commonButtonProps} to={to}>
        {children}
      </Button>
    );
  }

  // 3. 一般按鈕
  return <Button {...commonButtonProps}>{children}</Button>;
}

export default NavItem;
