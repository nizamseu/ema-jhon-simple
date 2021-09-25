import React from "react";
import Rating from "react-rating";
import "./Products.css";
const Products = (props) => {
  const handleAdd = props.handleAdd;
  const { name, img, stock, price, seller, star } = props.product;
  return (
    <div className="products">
      <img src={img} alt="" />
      <div className="product-info">
        <h4>{name}</h4>
        <p>
          <small>By {seller}</small>
        </p>
        <p>Price : {price}</p>
        <p>Only {stock} left in Stock - Order Soon</p>
        <Rating
          readonly
          initialRating={star}
          emptySymbol="fa fa-star-o ratingIcon"
          fullSymbol="fa fa-star  ratingIcon"
        ></Rating>
        <br />
        <button className="btn" onClick={() => handleAdd(props.product)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
