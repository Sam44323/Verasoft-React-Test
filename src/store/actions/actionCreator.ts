import * as actionTypes from "./actionTypes";

export const fetchOrderSummary = () => {
  return {
    type: actionTypes.FETCH_ORDER_SUMMARY,
  };
};

export const fetchUserSummary = () => {
  return {
    type: actionTypes.FETCH_USER_SUMMARY,
  };
};
