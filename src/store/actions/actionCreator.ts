import * as actionTypes from "./actionTypes";

export const fetchOrderSummaryStart = () => {
  return {
    type: actionTypes.FETCH_ORDER_SUMMARY,
  };
};

export const fetchOrderSummary = (ordertype: any) => {
  return {
    type: actionTypes.FETCH_ORDER_SUMMARY_ASYNC,
    order: ordertype,
  };
};

export const fetchUserSummaryStart = () => {
  return {
    type: actionTypes.FETCH_USER_SUMMARY,
  };
};

export const fetchUserSummary = (userData: any) => {
  return {
    type: actionTypes.FETCH_USER_SUMMARY_ASYNC,
    data: userData,
  };
};

export const toggleOrderBtn = (btnName: string) => {
  return {
    type: actionTypes.TOGGLE_ORDER_BTN,
    btnName: btnName,
  };
};

export const setOrderNavButton = (order: number) => {
  return {
    type: actionTypes.SET_ORDER_NAV,
    name: order,
  };
};

export const fetchingStart = () => {
  return {
    type: actionTypes.START_FETCHING,
  };
};

export const fetchingEnd = () => {
  return {
    type: actionTypes.END_FETCHING,
  };
};

export const errorFetching = (err: any) => {
  return {
    type: actionTypes.ERROR_EXIST,
    error: err,
  };
};
