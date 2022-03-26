import React, { useEffect, useState } from "react";
import Cart, { Name } from "../Cart/Cart";
import Phone from "../Phone/Phone";
import "./Shop.css";

const Shop = () => {
  const [phones, setPhones] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("phones.json")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);

  const clearCart = () =>{
    setCart([])
  }

  const handleAddToCart = (selectedProduct) => {

    let newCart = [...cart, selectedProduct];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="phone-container">
        {phones.map((phone) => (
          <Phone
            handleAddToCart={handleAddToCart}
            phone={phone}
            key={phone.id}
          ></Phone>
        ))}
      </div>
      <div className="cart-container">
        <h2>selected Phone</h2>
        {cart.map((name) => (
          <Cart name={name} key={name.id}></Cart>
        ))}
        <button className="btn choose-btn">
          <p>Choose one for me</p>
        </button>
        <button onClick={()=>{clearCart()}} className="btn">
          <p>Choose Again</p>
        </button>
      </div>
    </div>
  );
};

export default Shop;
