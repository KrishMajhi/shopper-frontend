import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useShop } from "../Context/ShopContext";
import "./css/Product.css";

function Product() {
  const { all_products } = useShop();
  const { productid } = useParams();
  const productIdNumber = Number(productid);

  const [selectedSize, setSelectedSize] = useState(null);
  const myproduct = all_products.filter((item) => item.id === productIdNumber);

  if (myproduct.length === 0) {
    return <div className="product-not-found">Product not found</div>;
  }

  const {
    image,
    category,
    name,
    new_price,
    old_price,
    description = "No description available.",
  } = myproduct[0];

  console.log(myproduct.length);
  
  const multipliers = {
    S: 1,
    M: 1.1,
    L: 1.2,
    XL: 1.3,
    XXL: 1.4,
  };

  const calculatedPrice = selectedSize
    ? (new_price * multipliers[selectedSize]).toFixed(2)
    : null;

  const handleSizeClick = (size) => {
    if (selectedSize == size) {
      setSelectedSize(null);
    } else {
      setSelectedSize(size);
    }
  };

  return (
    <div className="product-page">
      <div className="product-gallery">
        <img src={image} alt={name} className="thumb-img" />
        <img src={image} alt={name} className="thumb-img" />
        <img src={image} alt={name} className="thumb-img" />
      </div>

      <div className="product-main-image">
        <img src={image} alt={name} />
      </div>

      <div className="product-info">
        <h1 className="pr-h">{name}</h1>
        <div className="rating">⭐⭐⭐⭐☆ (122)</div>

        <div className="price-section">
          {old_price && <span className="old-price">${old_price}</span>}
          {selectedSize ? (
            <span className="new-price">${calculatedPrice}</span>
          ) : (
            <span className="new-price">{new_price}</span>
          )}
        </div>

        <p className="product-description">{description}</p>

        <div className="size-select">
          <span>Select Size:</span>
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              onClick={() => handleSizeClick(size)}
              style={{
                background: selectedSize === size ? "black" : "yellow",
                color: selectedSize === size ? "white" : "black",
                marginRight: "10px",
              }}
            >
              {size}
            </button>
          ))}
        </div>

        <button className="add-to-cart" disabled={!selectedSize}>
          Add to Cart
        </button>

        <p className="meta">
          <strong>Category:</strong> {category} <br />
          <strong>Tags:</strong> Modern, Latest
        </p>
      </div>
    </div>
  );
}

export default Product;
