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
