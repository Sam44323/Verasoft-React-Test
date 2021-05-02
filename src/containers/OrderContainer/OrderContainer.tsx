import React from "react";

import styles from "./OrderContainer.module.css";
import OrderNav from "../../components/OrderCategory/OrderNav/OrderNav";
import OrderSectionNav from "../../components/OrderCategory/OrdersSection/OrderSectionNav/OrderSectionNav";

const OrderContainer: React.FC = () => {
  return (
    <>
      <OrderNav />
      <OrderSectionNav />
    </>
  );
};

export default OrderContainer;
