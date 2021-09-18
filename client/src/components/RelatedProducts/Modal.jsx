import React, { useState, useEffect, useRef, createRef } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

import StyledModal from "./Modal.css";

const modalRoot = document.getElementById("modal-root");

const Modal = (props) => {
  const [fadeType, setFadeType] = useState(() => null);
  const background = createRef();

  const isMounted = useRef();

  useEffect(() => {
    if (!isMounted.current) {
      window.addEventListener("keydown", onEscKeyDown, false);
      setTimeout(() => setFadeType("in"), 0);
    } else {
      if (!props.isOpen && prevProps.isOpen) {
        setFadeType("out");
      }
    }
    return window.removeEventListener("keydown", onEscKeyDown, false);
  });

  const transitionEnd = e => {
    if (e.propertyName !== "opacity" || fadeType === "in") return;

    if (fadeType === "out") {
      props.onClose();
    }
  };

  const onEscKeyDown = e => {
    if (e.key !== "Escape") return;
    setFadeType("out");
  };

  const handleClick = e => {
    e.preventDefault();
    setFadeType("out");
  };

  return ReactDom.createPortal(
    <StyledModal
      id={props.id}
      className={`wrapper ${"size-" + props.modalSize} fade-${
        fadeType
      } ${props.modalClass}`}
      role="dialog"
      modalSize={props.modalSize}
      onTransitionEnd={transitionEnd}
    >
      <div className="box-dialog">
        <div className="box-header">
          <h4 className="box-title">Pure React Modal</h4>
          <button onClick={handleClick} className="close">
            ×
          </button>
        </div>
        <div className="box-content">{props.children}</div>
        <div className="box-footer">
          <button onClick={handleClick} className="close">
            Close
          </button>
        </div>
      </div>
      <div
        className={`background`}
        onMouseDown={handleClick}
        ref={background}
      />
    </StyledModal>,
    modalRoot
  );
}

export default Modal;
