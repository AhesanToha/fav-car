import React from "react";
import './Cart.css'


const Cart = ({  name }) => {
  
  console.log(name);
    
  return (
    <div>
      <h3>{name.phone_name}</h3>
    </div>
  );
};


export default Cart;
