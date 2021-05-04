import { StateInterface, ActionInterface, Orders } from "../utils/interfaces";
import * as actionTypes from "./actions/actionTypes";
import { Order } from "../utils/interfaces";

const initialState: StateInterface = {
  summary: {
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
  orders: {
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
    error: [
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
  error: "",
  currentOrderNav: 3,
  currentOrderBtn: "sent",
  loading: false,
};

const getOrder = (orders: Orders, nav: number) => {
  switch (nav) {
    case 1:
      return orders.orders_A;

    case 2:
      return orders.orders_AA;

    case 3:
      return orders.orders_AAA;

    case 4:
      return orders.orders_B;

    case 5:
      return orders.orders_C;

    default:
      return;
  }
};

const reducer = (
  state: StateInterface = initialState,
  actions: ActionInterface
): StateInterface => {
  switch (actions.type) {
    case actionTypes.FETCH_ORDER_SUMMARY_ASYNC:
      let order: {
        sent?: Order[];
        error?: Order[];
      };
      const data = getOrder(actions.order as Orders, state.currentOrderNav);
      if (Array.isArray(data)) {
        order = {
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
          error: [
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
        };
      } else {
        order = data as { sent?: Order[]; error: Order[] };
      }
      return { ...state, orders: order };

    case actionTypes.FETCH_USER_SUMMARY_ASYNC:
      return { ...state, summary: actions.data.data, loading: false };

    case actionTypes.TOGGLE_ORDER_BTN:
      return { ...state, currentOrderBtn: actions.btnName as string };

    case actionTypes.SET_ORDER_NAV:
      return { ...state, currentOrderNav: actions.name as number };

    case actionTypes.START_FETCHING:
      return { ...state, loading: true };

    case actionTypes.END_FETCHING:
      return { ...state, loading: false };

    case actionTypes.ERROR_EXIST:
      return { ...state, error: actions.error.message };

    default:
      return { ...state };
  }
};

export default reducer;
