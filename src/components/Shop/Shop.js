import React, { useEffect, useState } from "react";
import Phone from "../Phone/Phone";
import "./Shop.css";

const Shop = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    fetch("phones.json")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="phone-container">
        {phones.map((phone) => (
          <Phone phone={phone} key={phone.id}></Phone>
        ))}
      </div>
      <div className="phone-cart">
          <h1>this is cart contaiuner</h1>
      </div>
    </div>
  );
};

export default Shop;
