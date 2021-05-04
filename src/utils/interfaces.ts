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

export interface Order {
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

export interface Orders {
  orders_A: [];
  orders_AA: [];
  orders_AAA: {
    sent: Order[];
  };
  orders_B: [];
  orders_C: [];
}

export interface StateInterface {
  summary: SummaryInterface;
  orders: { sent?: Order[] | undefined; error?: Order[] | undefined };
  error: string;
  currentOrderNav: number;
  currentOrderBtn: string;
  loading: boolean;
}

export interface ActionInterface {
  type: string;
  order?: Orders;
  btnName?: string;
  data?: any;
  error?: any;
  name?: any;
}
