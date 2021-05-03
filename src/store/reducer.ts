import { StateInterface, ActionInterface } from "../utils/interfaces";
import * as actionTypes from "./actions/actionTypes";

const initialState: StateInterface = {
  summary: [
    {
      id: 12345678,
      first_name: "Joseph",
      last_name: "Smith",
      photo_url: "",
      gender: "male",
      birth_date: "1975-06-18",
      home_phone: "248-555-1000",
      mobile_phone: "248-555-3000",
      work_phone: "248-555-2000",
      email: "joe.smith@testemail.com",
      activity: {
        sms: 6,
        email: 4,
        orders: 1,
      },
      carrier_status: {
        since: "2006-06-02T21:00:00.000Z",
        status: "IN",
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
  currentOrderNav: "ORDER A",
  currentOrderBtn: "SENT",
};

const reducer = (
  state: StateInterface = initialState,
  actions: ActionInterface
): StateInterface => {
  switch (actions.type) {
    case actionTypes.FETCH_ORDER_SUMMARY:
      return { ...state };

    case actionTypes.FETCH_USER_SUMMARY:
      return { ...state };

    default:
      return { ...state };
  }
};

export default reducer;
