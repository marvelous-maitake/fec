import React, { useState, useEffect, useContext } from 'react';
import ReactDom from "react-dom";
import PropTypes from "prop-types";

import StyledModal from "./Modal.css";

const modalRoot = document.getElementById("modal-root");

const Modal = (props) => {

  props = props || {
    id: "",
    modalClass: "",
    modalSize: "md"
  }

  const background = React.createRef();

  const mounted = React.useRef();

  const [fadeType, setFadeType] = useState(() => null);

  const onEscKeyDown = e => {
    if (e.key !== "Escape") return;
    setFadeType("out");
  };

  const transitionEnd = e => {
    if (e.propertyName !== "opacity" || this.state.fadeType === "in") return;
    if (fadeType === "out") {
      props.onClose();
    }
  };

  const handleClick = e => {
    e.preventDefault();
    setFadeType("out");
  };

  useEffect(() => {
    if (!mounted.current) {
      window.addEventListener("keydown", onEscKeyDown, false);
      setTimeout(() => setFadeType("in"), 0);
      return () => {
        window.removeEventListener("keydown", onEscKeyDown, false);
      }
      mounted.current = true;
    } else {
      if (!props.isOpen && prevProps.isOpen) {
        setFadeType("out");
      }
    }
  })

  return ReactDom.createPortal(
    <StyledModal
        id={props.id}
        className={`wrapper ${props.class}`}
        role="dialog"
        size={props.size}
        onTransitionEnd={transitionEnd}
        fadeType={fadeType}
    >
      <div className="box-dialog">
        <div className="box-header">
          <h4 className="box-title">Title Of Modal</h4>
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