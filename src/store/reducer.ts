import { StateInterface, ActionInterface } from "../utils/interfaces";
import * as actionTypes from "./actions/actionTypes";

const initialState: StateInterface = {
  summary: [
    {
      id: 1,
      first_name: "",
      last_name: "",
      photo_url: "",
      gender: "",
      birth_date: "",
      home_phone: "",
      mobile_phone: "",
      work_phone: "",
      email: "",
      activity: {
        sms: 0,
        email: 0,
        orders: 0,
      },
      carrier_status: {
        since: "",
        status: "",
      },
    },
  ],
  orders: {
    orders_A: [],
    orders_AA: [],
    orders_AAA: {
      sent: [
        {
          id: 0,
          order_id: 0,
          sent_dt: "",
          sent_tm: "",
          subject: {
            title: "",
            email: "",
          },
          type: "",
        },
      ],
    },
    orders_B: [],
    orders_C: [],
  },
  error: "",
};

const reducer = (state = initialState, actions: ActionInterface) => {
  switch (actions.type) {
    case actionTypes.FETCH_ORDER_SUMMARY:
      break;

    case actionTypes.FETCH_USER_SUMMARY:
      break;

    default:
      return state;
  }
};
