export interface SummaryInterface {
  id: number;
  first_name: string;
  last_name: string;
  photo_url: string;
  gender: string;
  birth_date: string;
  home_phone: string;
  mobile_phone: string;
  work_phone: string;
  email: string;
  activity: {
    sms: number;
    email: number;
    orders: number;
  };
  carrier_status: {
    since: string;
    status: string;
  };
}

interface Order {
  id: number;
  order_id: number;
  sent_dt: string;
  sent_tm: string;
  subject: {
    title: string;
    email: string;
  };
  type: string;
}

interface Orders {
  orders_A: [];
  orders_AA: [];
  orders_AAA: {
    sent: Order[];
  };
  orders_B: [];
  orders_C: [];
}

export interface StateInterface {
  summary: SummaryInterface[];
  orders: Orders;
  error: string;
  currentOrderNav: string;
  currentOrderBtn: string;
}

export interface ActionInterface {
  type: string;
}
