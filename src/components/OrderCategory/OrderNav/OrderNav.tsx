import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../../../store/actions/actionCreator";

import styles from "./OrderNav.module.css";
import OrderBox from "../../../UI-Components/OrderBox/OrderBox";
import { StateInterface } from "../../../utils/interfaces";

const OrderNav: React.FC = () => {
  const navName = useSelector<StateInterface, number>(
    (state) => state.currentOrderNav
  );
  const dispatch = useDispatch();
  const orderButtonHandler = useCallback(
    (order: number) => {
      dispatch(actionCreators.setOrderNavButton(order));
      dispatch(actionCreators.fetchOrderSummaryStart());
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(actionCreators.setOrderNavButton(3));
    dispatch(actionCreators.fetchOrderSummaryStart());
  }, [dispatch]);
  return (
    <div className={styles.orderNavContainer}>
      <div className={styles.navSection}>
        <OrderBox
          orderHandler={orderButtonHandler}
          currOrder={navName}
          order={1}
        >
          ORDER A
        </OrderBox>
        <OrderBox
          orderHandler={orderButtonHandler}
          currOrder={navName}
          order={2}
        >
          ORDER AA
        </OrderBox>
        <OrderBox
          orderHandler={orderButtonHandler}
          currOrder={navName}
          order={3}
        >
          ORDER AAA
        </OrderBox>
        <OrderBox
          orderHandler={orderButtonHandler}
          currOrder={navName}
          order={4}
        >
          ORDER B
        </OrderBox>
        <OrderBox
          orderHandler={orderButtonHandler}
          currOrder={navName}
          order={5}
        >
          ORDER C
        </OrderBox>
      </div>
    </div>
  );
};

export default OrderNav;
