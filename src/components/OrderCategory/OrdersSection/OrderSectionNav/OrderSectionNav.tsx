import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import * as actionCreators from "../../../../store/actions/actionCreator";

import styles from "./OrderSectionNav.module.css";

const OrderSectionNav: React.FC = () => {
  const dispatch = useDispatch();
  const toggleDataBtn = useCallback(
    (btnName: string) => {
      dispatch(actionCreators.toggleOrderBtn(btnName));
    },
    [dispatch]
  );
  return (
    <div className={styles.orderSectionNavContainer}>
      <div className={styles.buttonSection}>
        <button onClick={() => toggleDataBtn("SENT")}>SENT</button>
        <button onClick={() => toggleDataBtn("ERRORS")}>ERRORS</button>
      </div>
      <h1>RECENT ORDERS</h1>
    </div>
  );
};

export default OrderSectionNav;
