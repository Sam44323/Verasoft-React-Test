import React from "react";

import styles from "./OrderBox.module.css";

const OrderBox: React.FC<{
  orderHandler: (name: number) => void;
  currOrder: number;
  order: number;
  children: string;
}> = (props) => {
  return (
    <button
      className={`${styles.buttonSection} ${
        props.order === props.currOrder && styles.activeBtn
      }`}
      onClick={() => props.orderHandler(props.order)}
    >
      {props.children}
    </button>
  );
};

export default OrderBox;
