import React from "react";

import styles from "./ComActivity.module.css";

const ComActivity: React.FC = () => {
  return (
    <div className={styles.comContainer}>
      <h1 className={styles.comHeading}>90-DAY COMMUNICATION ACTIVITY</h1>
      <div className={styles.comDetails}>
        <div className={styles.details}>
          <h1>6</h1>
          <p>SMS</p>
        </div>
        <div className={styles.details}>
          <h1>4</h1>
          <p>EMAIL</p>
        </div>
        <div className={styles.details}>
          <h1>1</h1>
          <p>ORDERS</p>
        </div>
      </div>
    </div>
  );
};

export default ComActivity;
