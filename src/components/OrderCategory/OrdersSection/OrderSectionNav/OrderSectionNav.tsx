import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../../../../store/actions/actionCreator";
import { StateInterface } from "../../../../utils/interfaces";

import styles from "./OrderSectionNav.module.css";

const OrderSectionNav: React.FC = () => {
  const btnName = useSelector<StateInterface, string>(
    (state) => state.currentOrderBtn
  );
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
        <button
          onClick={() => toggleDataBtn("sent")}
          className={btnName === "sent" ? styles.activeBtn : ""}
        >
          SENT
        </button>
        <button
          onClick={() => toggleDataBtn("errors")}
          className={btnName === "errors" ? styles.activeBtn : ""}
        >
          ERRORS
        </button>
      </div>
      <h1>RECENT ORDERS</h1>
    </div>
  );
};

export default OrderSectionNav;
