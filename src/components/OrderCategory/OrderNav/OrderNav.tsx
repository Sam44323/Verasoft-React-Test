import React, { useCallback } from "react";

import styles from "./OrderNav.module.css";
import OrderBox from "../../../UI-Components/OrderBox/OrderBox";

const OrderNav: React.FC = () => {
  const orderButtonHandler = useCallback((name: string) => {
    console.log(name);
  }, []);
  return (
    <div className={styles.orderNavContainer}>
      <div className={styles.navSection}>
        <OrderBox orderHandler={orderButtonHandler}>ORDER A</OrderBox>
        <OrderBox orderHandler={orderButtonHandler}>ORDER AA</OrderBox>
        <OrderBox orderHandler={orderButtonHandler}>ORDER AAA</OrderBox>
        <OrderBox orderHandler={orderButtonHandler}>ORDER B</OrderBox>
        <OrderBox orderHandler={orderButtonHandler}>ORDER C</OrderBox>
      </div>
    </div>
  );
};

export default OrderNav;
