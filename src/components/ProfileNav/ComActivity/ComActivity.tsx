import React from "react";

import styles from "./ComActivity.module.css";

const ComActivity: React.FC<{ sms: number; email: number; orders: number }> = (
  props
) => {
  return (
    <div className={styles.comContainer}>
      <h1 className={styles.comHeading}>90-DAY COMMUNICATION ACTIVITY</h1>
      <div className={styles.comDetails}>
        <div className={styles.details}>
          <h1>{props.sms}</h1>
          <p>SMS</p>
        </div>
        <div className={styles.details}>
          <h1>{props.email}</h1>
          <p>EMAIL</p>
        </div>
        <div className={styles.details}>
          <h1>{props.orders}</h1>
          <p>ORDERS</p>
        </div>
      </div>
    </div>
  );
};

export default ComActivity;
