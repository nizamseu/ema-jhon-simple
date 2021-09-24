import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./ShopCart.css";

const ShopCart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // add products to cart
  const handleAdd = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="shop">
      <div className="product-container">
        <h1>Products:{products.length}</h1>
        {products.map((product) => (
          <Products key={product.key} product={product} handleAdd={handleAdd}></Products>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default ShopCart;
