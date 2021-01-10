import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="m-5">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizza" />
        <Order orderType="Salad" />
        <Order orderType="Chocolate Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
