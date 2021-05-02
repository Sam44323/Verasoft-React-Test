import React from "react";

import styles from "./OrderBox.module.css";

const OrderBox: React.FC = (props) => {
  return <button className={styles.buttonSection}>{props.children}</button>;
};

export default OrderBox;
