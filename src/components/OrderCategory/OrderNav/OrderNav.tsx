import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import * as actionCreators from "../../../store/actions/actionCreator";

import styles from "./OrderNav.module.css";
import OrderBox from "../../../UI-Components/OrderBox/OrderBox";

const OrderNav: React.FC = () => {
  const dispatch = useDispatch();
  const orderButtonHandler = useCallback(
    (name: string) => {
      dispatch(actionCreators.fetchOrderSummary(name));
    },
    [dispatch]
  );
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
