import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Phone.css";

const Phone = ({ phone, handleAddToCart }) => {
  const { phone_name, image, price } = phone;
  return (
    <div className="phone">
      <img src={image} alt="" />
      <div className="phone-info">
        <h4 className="phone-name">{phone_name}</h4>
        <h5>Price: $ {price}</h5>
      </div>
      <button
        onClick={() => {
          handleAddToCart(phone);
        }}
        className="btn-cart"
      >
        <p>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Phone;
