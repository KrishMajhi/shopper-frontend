import React from "react";
import "./css/CartPage.css";
import { useShop } from "../Context/ShopContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer/Footer";
const Cart = () => {
  const { removeFromCart, cartItems, updateincart } = useShop();
  const inc = (item) => updateincart(item.id, (item.qty+1)*item.Price, item.qty+1);
  const dec = (item) => { const q = item.qty > 1 ? item.qty-1 : 1; updateincart(item.id, q*item.Price, q); };
  const subtotal = cartItems.reduce((a,i) => a+i.pTotal, 0);
  const shipping = cartItems.length > 0 ? 99 : 0;
  return (
    <div>
      <div className="cart-page">
        <div className="cart-head">
          <h1 className="cart-title">Your Cart</h1>
          <p className="cart-sub">{cartItems.length} item{cartItems.length!==1?"s":""}</p>
        </div>
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.length === 0 && (
              <div className="cart-empty">
                <FontAwesomeIcon icon={faShoppingBag} className="cart-empty-icon" />
                <h3>Your cart is empty</h3>
                <p>Add some products and come back here.</p>
                <Link to="/"><button className="cart-empty-btn">Continue Shopping</button></Link>
              </div>
            )}
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <Link to={`/products/${item.id}`}><img src={item.image} alt={item.name} className="cart-item-img" /></Link>
                <div className="cart-item-details">
                  <div className="cart-item-top">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <button className="cart-remove" onClick={() => removeFromCart(item.id)}><FontAwesomeIcon icon={faXmark} /></button>
                  </div>
                  <p className="cart-item-cat">Clothing</p>
                  <div className="cart-item-bottom">
                    <div className="qty-ctrl">
                      <button className="qty-btn" onClick={()=>dec(item)}>−</button>
                      <span className="qty-val">{item.qty}</span>
                      <button className="qty-btn" onClick={()=>inc(item)}>+</button>
                    </div>
                    <div className="cart-item-prices">
                      <span className="cart-item-unit">₹{item.Price} each</span>
                      <span className="cart-item-total">₹{item.pTotal}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {cartItems.length > 0 && (
            <div className="cart-summary">
              <h2 className="summary-title">Order Summary</h2>
              <div className="summary-rows">
                <div className="summary-row"><span>Subtotal</span><span>₹{subtotal}</span></div>
                <div className="summary-row"><span>Shipping</span><span>₹{shipping}</span></div>
                <div className="summary-row summary-total"><span>Total</span><span>₹{subtotal+shipping}</span></div>
              </div>
              <button className="checkout-btn">Proceed to Checkout →</button>
              <Link to="/" className="continue-link">← Continue Shopping</Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Cart;
