import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./Modal.module.css";

const Modal: React.FC = () => {
  return ReactDOM.createPortal(
    <div className={styles.modalContainer}>
      <div>
        <FontAwesomeIcon icon={faTimes} color="#EEEEEE" size="3x" />
      </div>
      <h1>Processing</h1>
    </div>,
    document.getElementById("modal")!
  );
};

export default Modal;
