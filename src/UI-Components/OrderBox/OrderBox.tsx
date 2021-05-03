import React from "react";

import styles from "./OrderBox.module.css";

const OrderBox: React.FC<{
  orderHandler: (name: string) => void;
  children: string;
}> = (props) => {
  return (
    <button
      className={styles.buttonSection}
      onClick={() => props.orderHandler(props.children)}
    >
      {props.children}
    </button>
  );
};

export default OrderBox;
