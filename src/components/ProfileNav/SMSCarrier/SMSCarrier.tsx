import React from "react";

import styles from "./SMSCarrier.module.css";

const SMSCarrier: React.FC<{ data: string[] }> = (props) => {
  return (
    <div className={styles.smsContainer}>
      <h1>SMS CARRIER STATUS</h1>
      <div className={styles.dataContainer}>
        <h1>IN</h1>
        <p>
          SINCE {props.data[0].toUpperCase()} {props.data[1]}, {props.data[2]}
        </p>
      </div>
    </div>
  );
};

export default SMSCarrier;
