import React, { useRef, useState, useEffect } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import logopic from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { useShop } from "../../Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const { cartItems, all_products, popular_data, collection_products, addToCart,
          wishlist, setWishlistOpen } = useShop();
  const dropRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();
    dropRef.current?.classList.remove("drag-over");
    const pid = parseInt(e.dataTransfer.getData("drag-product-id"));
    const ptype = e.dataTransfer.getData("drag-product-type");
    if (!pid || !ptype) return;
    const src = ptype === "all_product" ? all_products : ptype === "popular_data" ? popular_data : collection_products;
    const product = src.find((i) => i.id === pid);
    if (product && !cartItems.some((i) => i.id === pid)) {
      addToCart({ id: product.id, image: product.image, name: product.name,
        description: product.description, product: ptype, qty: 1,
        pTotal: Number(product.new_price || product.Price), Price: product.new_price || product.Price });
    }
  };

  const navLink = (to, label) => (
    <li>
      <NavLink className={({ isActive }) => isActive ? "nl active" : "nl"} to={to} onClick={() => setMenuOpen(false)}>
        {label}
      </NavLink>
    </li>
  );

  return (
    <nav className={`mainnav${scrolled ? " scrolled" : ""}`}>
      <Link to="/" className="brand">
        <img src={logopic} alt="logo" />
        <span className="brand-name">SHOPPER</span>
      </Link>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
        <span style={{ opacity: menuOpen ? 0 : 1 }} />
        <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
      </button>

      <ul className={`nl-container${menuOpen ? " open" : ""}`}>
        {navLink("/", "Home")}
        {navLink("/men", "Men")}
        {navLink("/women", "Women")}
        {navLink("/kids", "Kids")}
        {navLink("/admin", "Admin")}
      </ul>

      <div className="nav-actions">
        <button className="wish-btn" onClick={() => setWishlistOpen(true)} aria-label="Wishlist">
          <FontAwesomeIcon icon={faHeart} />
          {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
        </button>
        <Link to="/login"><button className="loginbtn">Login</button></Link>
        <div ref={dropRef} className="cart-drop-zone"
          onDrop={handleDrop}
          onDragOver={(e) => { e.preventDefault(); dropRef.current?.classList.add("drag-over"); }}
          onDragLeave={() => dropRef.current?.classList.remove("drag-over")}>
          <div className="carticon" data-count={cartItems.length}>
            <NavLink to="/cart"><img src={cart_icon} id="cartimg" alt="cart" /></NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
