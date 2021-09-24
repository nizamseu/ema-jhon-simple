import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  const total = parseFloat(cart.reduce((a, b) => a + b.price, 0));
  return (
    <div>
      <h1>Order Summary </h1>
      <h2>Items : {props.cart.length}</h2>
      <p>Total: {total}</p>
    </div>
  );
};

export default Cart;
