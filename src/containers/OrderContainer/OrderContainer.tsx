import React from "react";

import OrderNav from "../../components/OrderCategory/OrderNav/OrderNav";
import OrderSectionNav from "../../components/OrderCategory/OrdersSection/OrderSectionNav/OrderSectionNav";
import OrderColHeadings from "../../components/OrderCategory/OrdersSection/OrderColHeadings/OrderColHeadings";
import Sent from "../../components/OrderCategory/OrdersSection/Sent/OrderData/OrderData";

const OrderContainer: React.FC = () => {
  return (
    <>
      <OrderNav />
      <OrderSectionNav />
      <OrderColHeadings />
      <Sent />
    </>
  );
};

export default OrderContainer;
