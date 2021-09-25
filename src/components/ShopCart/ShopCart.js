import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./ShopCart.css";

const ShopCart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [matchProducts, setMatchProducts] = useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setMatchProducts(data);
      });
  }, []);

  // add products to cart
  const handleAdd = (product) => {
    setCart([...cart, product]);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    console.log(inputValue);
    const matched = products.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()));
    setMatchProducts(matched);
  };

  return (
    <div>
      <div className="search">
        <input onChange={handleChange} type="text" placeholder="Search Product" />
      </div>
      <div className="shop">
        <div className="product-container">
          <h1>Products:{matchProducts.length}</h1>
          {matchProducts.map((product) => (
            <Products key={product.key} product={product} handleAdd={handleAdd}></Products>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
