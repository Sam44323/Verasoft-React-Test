import React from "react";

import styles from "./OrderData.module.css";

const OrderData: React.FC<{
  id: number;
  ord: number;
  sDt: string;
  sTm: string;
  title: string;
  email: string;
  type: string;
}> = (props) => {
  return (
    <div
      className={
        props.id % 2 !== 0 ? styles.sentContainer : styles.sentContainerEven
      }
    >
      <div className={styles.gridFirst}>
        <div className={styles.detailSection}>
          <h1>{props.sDt}</h1>
          <p>{props.sTm}</p>
        </div>
        <div className={styles.detailSection}>
          <h1>{props.title}</h1>
          <p>{props.email}</p>
        </div>
      </div>
      <div className={styles.gridSecond}>
        <div className={styles.detailSection}>
          <h1>{props.type}</h1>
        </div>
        <div className={styles.detailSection}>
          <h1>{props.ord}</h1>
        </div>
        <button>RESEND</button>
      </div>
    </div>
  );
};

export default OrderData;
