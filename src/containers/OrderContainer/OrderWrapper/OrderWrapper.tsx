import React from "react";

import styles from "./OrderWrapper.module.css";

const OrderWrapper: React.FC<{ length: number }> = (props) => {
  return (
    <>
      {props.length === 0 ? (
        <h1 className={styles.noItemContainer}>No Items</h1>
      ) : (
        props.children
      )}
    </>
  );
};

export default OrderWrapper;
