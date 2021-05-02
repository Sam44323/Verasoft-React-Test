import React from "react";

import styles from "./SMSCarrier.module.css";

const SMSCarrier: React.FC = () => {
  return (
    <div className={styles.smsContainer}>
      <h1>SMS CARRIER STATUS</h1>
      <div className={styles.dataContainer}>
        <h1>IN</h1>
        <p>SINCE JUN 3, 2016</p>
      </div>
    </div>
  );
};

export default SMSCarrier;
