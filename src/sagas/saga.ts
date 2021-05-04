import { takeLatest, put, StrictEffect, call } from "redux-saga/effects";
import * as actionCreators from "../store/actions/actionCreator";
import * as actionTypes from "../store/actions/actionTypes";
import { getSummary, getOrders } from "../axiosConfig/axiosApi";
import { AxiosResponse } from "axios";

function* fetchUserSummary() {
  yield put(actionCreators.fetchingStart());
  try {
    yield put(actionCreators.fetchingEnd());
    const response: AxiosResponse = yield call(getSummary);
    if (response.data) {
      yield put(actionCreators.fetchUserSummary(response));
    } else {
      throw new Error("Please try again!");
    }
  } catch (err) {
    yield put(actionCreators.errorFetching(err));
  }
}

function* fetchOrderSummary() {
  yield put(actionCreators.fetchingStart());
  try {
    yield put(actionCreators.fetchingEnd());

    const response: AxiosResponse = yield call(getOrders);
    if (response.data) {
      yield put(actionCreators.fetchOrderSummary(response.data));
    } else {
      throw new Error("Please try again!");
    }
  } catch (err) {
    yield put(actionCreators.errorFetching(err));
  }
}

export function* appFetchers(): Generator<StrictEffect> {
  yield takeLatest(actionTypes.FETCH_USER_SUMMARY, fetchUserSummary);
  yield takeLatest(actionTypes.FETCH_ORDER_SUMMARY, fetchOrderSummary);
}
