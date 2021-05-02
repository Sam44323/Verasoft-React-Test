import React from "react";

import styles from "./OrderData.module.css";

const OrderData: React.FC = () => {
  return (
    <div className={styles.sentContainer}>
      <div className={styles.gridFirst}>
        <div className={styles.detailSection}>
          <h1>Sat, Apr 14</h1>
          <p>4:19 PM</p>
        </div>
        <div className={styles.detailSection}>
          <h1>Thank You Bonus</h1>
          <p>joe.smith@testemail.com</p>
        </div>
      </div>
      <div className={styles.gridSecond}>
        <div className={styles.detailSection}>
          <h1>Promotion Email</h1>
        </div>
        <div className={styles.detailSection}>
          <h1>12345546</h1>
        </div>
        <button>RESEND</button>
      </div>
    </div>
  );
};

export default OrderData;
