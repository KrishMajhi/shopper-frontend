// import React from "react";
// import "./css/CartPage.css";
// import { useShop } from "../Context/ShopContext";
// import { Link } from "react-router-dom";
// import  { useEffect } from "react";

// const Cart = () => {
//     useEffect(() => {
//     console.log("caryttttt");
//   }, []);

//   const { removeFromCart, cartItems, updateincart, setCartItems } = useShop();

//   const increment = (item) => {
//     const newQty = item.qty + 1;
//     const newTotal = newQty * item.Price;
//     updateincart(item.id, newTotal, newQty);
//   };

//   const decrement = (item) => {
//     const newQty = item.qty > 1 ? item.qty - 1 : 1;
//     const newTotal = newQty * item.Price;
//     updateincart(item.id, newTotal, newQty);
//   };

//   const cartTotal = cartItems.reduce((acc, item) => acc + item.pTotal, 0);

//   return (
//     <div className="cart-container">
//       <div className="cart-items">
//         <h2 className="cart-h">Your Cart</h2>
//         <div className="col-name">
//           <li className="col-item">Product</li>
//           <li className="col-item">About</li>
//           <li className="col-item" style={{ marginLeft: "21%" }}>
//             Qty
//           </li>
//           <li className="col-item">Price</li>
//           <li className="col-item">Total</li>
//         </div>

//         {cartItems.map((item) => (
//           <div className="cart-item" key={item.id}>
//             <div
//               style={{ color: "black", cursor: "pointer" }}
//               onClick={() => removeFromCart(item.id)}
//             >
//               X
//             </div>
//             <Link to={`/products/${item.id}`}>
//               <img src={item.image} alt={item.name} />
//             </Link>
//             <div className="item-details" style={{ color: "black" }}>
//               <h3>Name: {item.name}</h3>
//               <p>Description: {item.description}</p>
//               <p style={{ color: "orange" }}>Retrievedfrm: {item.product}</p>
//             </div>
//             <div className="qty-control">
//               <button onClick={() => decrement(item)} className="qty-btn">
//                 −
//               </button>
//               <span className="qty-display">{item.qty}</span>
//               <button onClick={() => increment(item)} className="qty-btn">
//                 +
//               </button>
//             </div>
//             <p className="price-sectionp">₹{item.Price}</p>
//             <p
//               className="price-sectionp"
//               style={{ transform: "translateX(27px)" }}
//             >
//               ₹{item.pTotal}
//             </p>
//           </div>
//         ))}
//         <hr />
//       </div>

//       <div className="cart-summary">
//         <h2>Summary</h2>
//         <p>Total Items: {cartItems.length}</p>
//         <p>Total Price: ₹{cartTotal}</p>
//         <button onClick={() => setCartItems([])}>Proceed to Checkout</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect } from "react";
import "./css/CartPage.css";
import { useShop } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const Cart = () => {
  // useEffect(() => {
  //   console.log("Cart loaded");
  // }, []);
  console.log("Cart loaded");

  const { removeFromCart, cartItems, updateincart, setCartItems } = useShop();

  const increment = (item) => {
    const newQty = item.qty + 1;
    const newTotal = newQty * item.Price;
    updateincart(item.id, newTotal, newQty);
  };

  const decrement = (item) => {
    const newQty = item.qty > 1 ? item.qty - 1 : 1;
    const newTotal = newQty * item.Price;
    updateincart(item.id, newTotal, newQty);
  };

  const cartTotal = cartItems.reduce((acc, item) => acc + item.pTotal, 0);

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h2 className="cart-h">Your Cart</h2>
        <div className="col-name">
          <li className="col-item">Product</li>
          <li className="col-item">About</li>
          <li className="col-item" style={{ marginLeft: "21%" }}>
            Qty
          </li>
          <li className="col-item">Price</li>
          <li className="col-item">Total</li>
        </div>

        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div
              style={{ color: "black", cursor: "pointer" }}
              onClick={() => removeFromCart(item.id)}
            >
              X
            </div>
            <Link to={`/products/${item.id}`}>
              <img src={item.image} alt={item.name} />
            </Link>
            <div className="item-details" style={{ color: "black" }}>
              <h3>Name: {item.name}</h3>
              <p>Description: {item.description}</p>
              <p style={{ color: "orange" }}>Retrieved from: {item.product}</p>
            </div>
            <div className="qty-control">
              <button onClick={() => decrement(item)} className="qty-btn">
                −
              </button>
              <span className="qty-display">{item.qty}</span>
              <button onClick={() => increment(item)} className="qty-btn">
                +
              </button>
            </div>
            <p className="price-sectionp">₹{item.Price}</p>
            <p
              className="price-sectionp"
              style={{ transform: "translateX(27px)" }}
            >
              ₹{item.pTotal}
            </p>
          </div>
        ))}
        <hr />
      </div>

      <div className="cart-summary">
        <h2>Summary</h2>
        <p>Total Items: {cartItems.length}</p>
        <p>Total Price: ₹{cartTotal}</p>
        <button onClick={() => setCartItems([])}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
