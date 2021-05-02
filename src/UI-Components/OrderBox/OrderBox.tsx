import React from "react";

import styles from "./OrderBox.module.css";

const OrderBox: React.FC = (props) => {
  return (
    <button
      className={styles.buttonSection}
      onClick={() => console.log(props.children)}
    >
      {props.children}
    </button>
  );
};

export default OrderBox;
