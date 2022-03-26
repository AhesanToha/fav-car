import React from 'react';
import "./Phone.css"

const Phone = ({phone}) => {
    console.log(phone)
    const {phone_name, image, price} = phone;
    return (
        <div className='phone'>
            <img src={image} alt="" />
            <h3>{phone_name}</h3>
        </div>
    );
};

export default Phone;