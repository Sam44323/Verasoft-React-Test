import React from "react";

import styles from "./OrderSectionNav.module.css";

const OrderSectionNav: React.FC = () => {
  return (
    <div className={styles.orderSectionNavContainer}>
      <div className={styles.buttonSection}>
        <button>SENT</button>
        <button>ERRORS</button>
      </div>
      <h1>RECENT ORDERS</h1>
    </div>
  );
};

export default OrderSectionNav;
