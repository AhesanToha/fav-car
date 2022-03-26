import React from "react";
import "./Phone.css";

const Phone = ({ phone }) => {
  console.log(phone);
  const { phone_name, image, price } = phone;
  return (
    <div className="phone">
      <img src={image} alt="" />
      <div className="phone-info">
        <h4 className="phone-name">{phone_name}</h4>
        <h5>Price: $ {price}</h5>
      </div>
      <button className="btn-cart">Add To Cart</button>
    </div>
  );
};

export default Phone;
