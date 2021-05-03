import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// will render this modal using creatPortal

import styles from "./Modal.module.css";

const Modal: React.FC = () => {
  return (
    <div className={styles.modalContainer}>
      <div>
        <FontAwesomeIcon icon={faTimes} color="#EEEEEE" size="3x" />
      </div>
      <h1>Processing</h1>
    </div>
  );
};

export default Modal;
