import React, { useEffect, useRef } from "react";
// import { useOnClickOutside } from "../../../hooks";
import "./modal.scss";

const Modal = ({ open, heading, onClose, children, onSubmit, enableOutsideClick = false }) => {
  const ref = useRef();


  useEffect(() => {
    open ? document.body.classList.add("bg-overlay") : document.body.classList.remove("bg-overlay");
  }, [open]);

  return (
    open ?
      <div ref={ref} className='modal-container'>
        <div className="modal-header">
          <h5 className="modal-title">{heading}</h5>
          <button type="button" className="close header-btn" onClick={onClose} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
      : null
  );
};

export default Modal;