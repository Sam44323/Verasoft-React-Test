import React from "react";

import OrderNav from "../../components/OrderCategory/OrderNav/OrderNav";
import OrderSectionNav from "../../components/OrderCategory/OrdersSection/OrderSectionNav/OrderSectionNav";
import OrderColHeadings from "../../components/OrderCategory/OrdersSection/OrderColHeadings/OrderColHeadings";
import Sent from "../../components/OrderCategory/OrdersSection/Sent/OrderData/OrderData";
import Error from "../../components/OrderCategory/OrdersSection/Error/OrderData/OrderData";

const ORDERS = {
  sent: [
    {
      id: 1,
      order_id: 12345546,
      sent_dt: "2018-04-14",
      sent_tm: "16:19:00",
      subject: {
        title: "ABC Appointment Confirmation",
        email: "joe.smith@testemail.com",
      },
      type: "Gift Card Email",
    },
    {
      id: 2,
      order_id: 12345546,
      sent_dt: "2018-04-14",
      sent_tm: "16:19:00",
      subject: {
        title: "Receipt #12345546",
        email: "joe.smith@testemail.com",
      },
      type: "Order Email Receipt",
    },
  ],
};

const OrderContainer: React.FC = () => {
  return (
    <>
      <OrderNav />
      <OrderSectionNav />
      <OrderColHeadings />
      {ORDERS.sent.map((item) => (
        <Sent
          key={item.id}
          id={item.id}
          ord={item.order_id}
          sDt={item.sent_dt}
          sTm={item.sent_tm}
          title={item.subject.title}
          email={item.subject.email}
          type={item.type}
        />
      ))}
    </>
  );
};

export default OrderContainer;
