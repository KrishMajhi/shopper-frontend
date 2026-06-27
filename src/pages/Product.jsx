import React, { useState } from "react";
import "./css/Product.css";
import { useParams, Link } from "react-router-dom";
import { useShop } from "../Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartReg } from "@fortawesome/free-regular-svg-icons";
import Footer from "../components/Footer/Footer";

function Product() {
  const { productid } = useParams();
  const { all_products, popular_data, collection_products, addToCart, cartItems, toggleWishlist, isWishlisted } = useShop();

  const allItems = [...(all_products||[]), ...(popular_data||[]), ...(collection_products||[])];
  const product = allItems.find((p) => p.id === Number(productid));

  const [selectedSize, setSelectedSize] = useState(null);
  const isInCart = cartItems.some((item) => item.id === Number(productid));
  const inWish = product ? isWishlisted(product.id) : false;

  if (!product) {
    return (
      <div style={{ paddingTop: "140px", textAlign: "center", fontSize: "1.2rem", color: "var(--color-ink-3)", minHeight: "60vh" }}>
        Product not found. <Link to="/" style={{color:"var(--color-amber)"}}>Go back home →</Link>
      </div>
    );
  }

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const handleAddToCart = () => {
    addToCart({
      id: product.id, image: product.image, name: product.name,
      description: product.description || "", product: "all_product",
      qty: 1, pTotal: Number(product.new_price), Price: product.new_price,
    });
  };

  const handleWish = () => toggleWishlist({
    id: product.id, image: product.image, name: product.name,
    new_price: product.new_price, old_price: product.old_price, description: product.description,
  });

  return (
    <div>
      <div className="product-page">
        <div className="product-main-image">
          <img src={product.image} alt={product.name} />
          <button className={`pdp-wish${inWish?" active":""}`} onClick={handleWish} aria-label="Wishlist">
            <FontAwesomeIcon icon={inWish ? faHeart : faHeartReg} />
          </button>
        </div>

        <div className="product-info">
          <span className="section-eyebrow">{product.category || "Clothing"}</span>
          <h1 className="pr-h">{product.name}</h1>
          <div className="rating">★★★★☆ <span>(122 reviews)</span></div>

          <div className="price-section">
            <span className="new-price">₹{product.new_price}</span>
            {product.old_price && <span className="old-price">₹{product.old_price}</span>}
          </div>

          <hr className="product-divider" />

          <p className="product-description">
            {product.description || "A premium quality item crafted for style and comfort. Perfect for everyday wear."}
          </p>

          <span className="size-label">Select Size</span>
          <div className="size-grid">
            {sizes.map((size) => (
              <button key={size} onClick={() => setSelectedSize(size)} className={`size-btn${selectedSize===size?" sel":""}`}>
                {size}
              </button>
            ))}
          </div>

          <button className={`add-to-cart-btn${isInCart?" in-cart":""}`} onClick={handleAddToCart}>
            {isInCart ? <><FontAwesomeIcon icon={faCheck} /> Added to Cart</> : "Add to Cart"}
          </button>

          <div className="meta">
            <p><strong>Category:</strong> {product.category || "Clothing"}</p>
            <p><strong>Tags:</strong> Modern, Latest</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Product;
