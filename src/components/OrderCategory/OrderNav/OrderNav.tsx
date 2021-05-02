import React from "react";

import styles from "./OrderNav.module.css";
import OrderBox from "../../../UI-Components/OrderBox/OrderBox";

const OrderNav: React.FC = () => {
  return (
    <div className={styles.orderNavContainer}>
      <div className={styles.navSection}>
        <OrderBox>ORDER A</OrderBox>
        <OrderBox>ORDER AA</OrderBox>
        <OrderBox>ORDER AAA</OrderBox>
        <OrderBox>ORDER B</OrderBox>
        <OrderBox>ORDER C</OrderBox>
      </div>
    </div>
  );
};

export default OrderNav;
