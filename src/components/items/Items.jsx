import React from "react";
import "./Items.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCheck, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartReg } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useShop } from "../../Context/ShopContext";

function Items({ Pimg, Pname, Nprice, Oprice, id, desc, product }) {
  const { all_products, popular_data, collection_products, cartItems, addToCart, removeFromCart, toggleWishlist, isWishlisted } = useShop();
  const inCart = cartItems.some((i) => i.id === id);
  const inWish = isWishlisted(id);
  const discount = Oprice ? Math.round(((Oprice - Nprice) / Oprice) * 100) : 0;

  const handleCart = (e) => {
    e.preventDefault();
    const src = product === "all_product" ? all_products : product === "popular_data" ? popular_data : collection_products;
    const item = src.find((i) => i.id === id);
    if (!item) return;
    inCart ? removeFromCart(id) : addToCart({ id, image: Pimg, name: Pname, description: desc, product, qty: 1, pTotal: Number(Nprice), Price: Nprice });
  };
  const handleWish = (e) => { e.preventDefault(); toggleWishlist({ id, image: Pimg, name: Pname, new_price: Nprice, old_price: Oprice, description: desc }); };

  return (
    <div className="item" draggable onDragStart={(e) => { e.dataTransfer.setData("drag-product-id", id); e.dataTransfer.setData("drag-product-type", product); }}>
      {discount > 0 && <span className="item-badge">{discount}% OFF</span>}
      <button className={`item-wish${inWish ? " active" : ""}`} onClick={handleWish} aria-label="Wishlist">
        <FontAwesomeIcon icon={inWish ? faHeart : faHeartReg} />
      </button>
      <Link to={`/products/${id}`} className="item-img-link">
        <div className="item-img-wrap">
          <img src={Pimg} alt={Pname} className="item-img" />
          <div className="item-overlay">
            <button className={`item-cta${inCart ? " in" : ""}`} onClick={handleCart}>
              <FontAwesomeIcon icon={inCart ? faCheck : faCartPlus} />
              <span>{inCart ? "In Cart" : "Add to Cart"}</span>
            </button>
          </div>
        </div>
      </Link>
      <div className="item-info">
        <p className="item-name">{Pname}</p>
        <div className="item-prices">
          <span className="item-price">₹{Nprice}</span>
          {Oprice && <span className="item-old">₹{Oprice}</span>}
        </div>
      </div>
    </div>
  );
}
export default Items;
