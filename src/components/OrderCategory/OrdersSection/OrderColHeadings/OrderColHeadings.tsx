import React from "react";

import styles from "./OrderColHeadings.module.css";

const OrderColHeadings: React.FC = () => {
  return (
    <div className={styles.orderColHeadingsContainer}>
      <div className={styles.gridsFirst}>
        <p>DATE & TIME</p>
        <p>SUBJECT</p>
      </div>
      <div className={styles.gridsSecond}>
        <p>COMMUNICATION TYPE</p>
        <p>ORDER #</p>
      </div>
    </div>
  );
};

export default OrderColHeadings;
