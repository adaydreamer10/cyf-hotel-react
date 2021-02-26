import React, { useState } from "react";
import RestaurantButton from "./RestaurantButtton";

const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li>
      {props.orderType} : {orders} <br />
      <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;
