// import React from "react";
// import "./navbar.css";
// import { Link, NavLink } from "react-router-dom";
// // import logopic from "../assets/logo.png";
// import logopic from "../../assets/logo.png";

// import cart_icon from "../../assets/cart_icon.png";
// import { useShop } from "../../Context/ShopContext";






// function Navbar() {

  
//   const{cartItems}=useShop();
 
//   return (
//     <div className="mainnav">
//       <div className="logo-and-name">
//         <img src={logopic} alt="" />
//         <p className="company-name">SHOPPER</p>


//       </div>

//       <ul className="navitems-container">
//         <li ><NavLink className={({isActive})=>isActive?"navitems active":"navitems"} to='/'  style={{ }}>Home</NavLink></li>
//         <li ><NavLink className={({isActive})=>isActive?"navitems active":"navitems"} to='/men'>Men</NavLink></li>
//         <li ><NavLink className={({isActive})=>isActive?"navitems active":"navitems"} to='/women'>Women</NavLink></li>
//         <li ><NavLink className={({isActive})=>isActive?"navitems active":"navitems"} to='/kids'>kids</NavLink></li>
//       </ul>

//       <div className="nav-btn">
//       <Link to="/login"> <button className="loginbtn">Login</button></Link> 
//         <div className="carticon" data-count={cartItems.length}>
//           <NavLink to="/cart" className={({isActive})=>isActive?".act":null}>
//           <img  src={cart_icon} id="cartimg" />
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


























import React, { useRef } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import logopic from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { useShop } from "../../Context/ShopContext";

function Navbar() {
  const {
    cartItems,
    all_products,
    popular_data,
    collection_products,
    addToCart,
  } = useShop();

  const dropRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    dropRef.current?.classList.remove("drag-over");

    const droppedId = e.dataTransfer.getData("drag-product-id");
    const droppedType = e.dataTransfer.getData("drag-product-type");
    const pid = parseInt(droppedId);
    if (!pid || !droppedType) return;

    let product = null;
    if (droppedType === "all_product") {
      product = all_products.find((item) => item.id === pid);
    } else if (droppedType === "popular_data") {
      product = popular_data.find((item) => item.id === pid);
    } else if (droppedType === "new_collection") {
      product = collection_products.find((item) => item.id === pid);
    }

    if (product && !cartItems.some((item) => item.id === pid)) {
      addToCart({
        id: product.id,
        image: product.image,
        name: product.name,
        description: product.description,
        product: droppedType,
        qty: 1,
        pTotal: Number(product.Price),
        Price: product.Price,
      });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    dropRef.current?.classList.add("drag-over");
  };

  const handleDragLeave = () => {
    dropRef.current?.classList.remove("drag-over");
  };

  return (
    <div className="mainnav">
      <div className="logo-and-name">
        <img src={logopic} alt="logo" />
        <p className="company-name">Clothzy</p>
      </div>

      <ul className="navitems-container">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navitems active" : "navitems"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navitems active" : "navitems"
            }
            to="/men"
          >
            Men
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navitems active" : "navitems"
            }
            to="/women"
          >
            Women
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navitems active" : "navitems"
            }
            to="/kids"
          >
            Kids
          </NavLink>
        </li>
      </ul>

      <div className="nav-btn">
        <Link to="/login">
          <button className="loginbtn">Login</button>
        </Link>

        <div
          ref={dropRef}
          className="cart-drop-zone"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          title="Drop product image here to add to cart"
        >
          <div className="carticon" data-count={cartItems.length}>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? ".act" : null)}
            >
              <img src={cart_icon} id="cart-drop-target" alt="cart" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
