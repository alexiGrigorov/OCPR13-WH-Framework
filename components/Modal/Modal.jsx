import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import CloseIcon from "../../assets/svgs/circle-xmark.svg?react";

import "./Modal.css";

export default function Modal({ isOpen, onClose, labelledBy, children }) {
  const dialogRef = useRef(null);
  const portalTarget = document.getElementById("modal");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // Handle open/close
    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (e) => {
      e.preventDefault();
      onClose();
    };

    dialog.addEventListener("cancel", handleCancel);
    return () => {
      dialog.removeEventListener("cancel", handleCancel);
    };
  }, [onClose]);

  if (!portalTarget) return null;

  return createPortal(
    <dialog
      className="wh-modal"
      ref={dialogRef}
      {...(labelledBy
        ? { "aria-labelledby": labelledBy }
        : { "aria-label": "Dialog" })}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close modal"
        className="wh-modal-close"
      >
        <CloseIcon />
      </button>
      {children}
    </dialog>,
    portalTarget,
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  labelledBy: PropTypes.string,
  children: PropTypes.node.isRequired,
};
