import React from "react";
import "./Footer.css";
import logopic from "../../assets/logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo-row">
            <img src={logopic} alt="logo" />
            <span className="footer-brand-name">SHOPPER</span>
          </div>
          <p>Curated fashion for every moment — style that speaks for you.</p>
        </div>
        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/men">Men's Clothing</Link></li>
            <li><Link to="/women">Women's Clothing</Link></li>
            <li><Link to="/kids">Kids</Link></li>
            <li><Link to="/admin">Admin Panel</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow</h4>
          <div className="footer-social">
            {["Instagram","Twitter","Pinterest","WhatsApp"].map(s=>(<a key={s} href="#" className="social-pill">{s}</a>))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Shopper. All Rights Reserved.</p>
        <span className="footer-divider" />
        <p>Designed with care</p>
      </div>
    </footer>
  );
}
export default Footer;
