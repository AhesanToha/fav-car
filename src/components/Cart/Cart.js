import React from "react";
import './Cart.css'


const Cart = ({  name }) => {
  return (
    <div className="cart">
      <h3>{name.phone_name}</h3>
    </div>
  );
};


export default Cart;
