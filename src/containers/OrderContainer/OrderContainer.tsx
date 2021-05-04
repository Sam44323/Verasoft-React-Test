import React from "react";
import { useSelector } from "react-redux";

import OrderNav from "../../components/OrderCategory/OrderNav/OrderNav";
import OrderSectionNav from "../../components/OrderCategory/OrdersSection/OrderSectionNav/OrderSectionNav";
import OrderColHeadings from "../../components/OrderCategory/OrdersSection/OrderColHeadings/OrderColHeadings";
import Sent from "../../components/OrderCategory/OrdersSection/Sent/OrderData/OrderData";
import Error from "../../components/OrderCategory/OrdersSection/Error/OrderData/OrderData";
import { StateInterface } from "../../utils/interfaces";
import Loader from "../../UI-Components/Loader/Loader";
import OrderWrapper from "./OrderWrapper/OrderWrapper";

const OrderContainer: React.FC = () => {
  const state = useSelector<StateInterface, StateInterface>((state) => state);
  const { orders, currentOrderBtn, loading } = state;
  return (
    <>
      <OrderNav />
      <OrderSectionNav />
      <OrderColHeadings />
      {!loading ? (
        currentOrderBtn === "sent" ? (
          <OrderWrapper length={orders.sent?.length ? 1 : 0}>
            {orders.sent!.map((item) => (
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
          </OrderWrapper>
        ) : (
          <OrderWrapper length={orders.error?.length ? 1 : 0}>
            {orders.error?.map((item) => (
              <Error
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
          </OrderWrapper>
        )
      ) : (
        <Loader />
      )}
    </>
  );
};

export default OrderContainer;
