import React from "react";
import "./WishlistPanel.css";
import { useShop } from "../../Context/ShopContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faHeart, faCartPlus } from "@fortawesome/free-solid-svg-icons";
function WishlistPanel() {
  const { wishlist, wishlistOpen, setWishlistOpen, toggleWishlist, addToCart, cartItems } = useShop();
  const moveToCart = (item) => {
    if (!cartItems.some(c => c.id === item.id)) {
      addToCart({ id:item.id, image:item.image, name:item.name, description:item.description||"", product:"all_product", qty:1, pTotal:Number(item.new_price), Price:item.new_price });
    }
    toggleWishlist(item);
  };
  return (
    <>
      <div className={`wish-overlay${wishlistOpen?" show":""}`} onClick={() => setWishlistOpen(false)} />
      <aside className={`wish-panel${wishlistOpen?" open":""}`}>
        <div className="wish-panel-head">
          <div className="wish-panel-title">
            <FontAwesomeIcon icon={faHeart} className="wish-panel-icon" />
            <span>Wishlist ({wishlist.length})</span>
          </div>
          <button className="wish-close" onClick={() => setWishlistOpen(false)} aria-label="Close"><FontAwesomeIcon icon={faXmark} /></button>
        </div>
        <div className="wish-items">
          {wishlist.length === 0 ? (
            <div className="wish-empty">
              <FontAwesomeIcon icon={faHeart} className="wish-empty-icon" />
              <p>Your wishlist is empty</p>
              <span>Save items you love and find them here.</span>
            </div>
          ) : (
            wishlist.map(item => (
              <div key={item.id} className="wish-item">
                <Link to={`/products/${item.id}`} onClick={() => setWishlistOpen(false)}>
                  <img src={item.image} alt={item.name} className="wish-item-img" />
                </Link>
                <div className="wish-item-info">
                  <p className="wish-item-name">{item.name}</p>
                  <p className="wish-item-price">₹{item.new_price}</p>
                  <div className="wish-item-actions">
                    <button className="wish-to-cart" onClick={() => moveToCart(item)}><FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
                    <button className="wish-remove" onClick={() => toggleWishlist(item)}>Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </aside>
    </>
  );
}
export default WishlistPanel;
