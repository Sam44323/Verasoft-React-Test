import * as actionTypes from "./actionTypes";

export const fetchOrderSummary = (ordertype: string) => {
  return {
    type: actionTypes.FETCH_ORDER_SUMMARY,
    order: ordertype,
  };
};

export const fetchUserSummary = () => {
  return {
    type: actionTypes.FETCH_USER_SUMMARY,
  };
};

export const toggleOrderBtn = (btnName: string) => {
  return {
    type: actionTypes.TOGGLE_ORDER_BTN,
    btnName: btnName,
  };
};
