import React from "react";

import OrderNav from "../../components/OrderCategory/OrderNav/OrderNav";
import OrderSectionNav from "../../components/OrderCategory/OrdersSection/OrderSectionNav/OrderSectionNav";
import OrderColHeadings from "../../components/OrderCategory/OrdersSection/OrderColHeadings/OrderColHeadings";

const OrderContainer: React.FC = () => {
  return (
    <>
      <OrderNav />
      <OrderSectionNav />
      <OrderColHeadings />
    </>
  );
};

export default OrderContainer;
