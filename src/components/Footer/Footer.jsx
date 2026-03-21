import React from "react";
import "./Footer.css";
import facebookIcon from "../../assets/whatsapp_icon.png";
import instagramIcon from "../../assets/instagram_icon.png";
import twitterIcon from "../../assets/twitter-logo.png";
import pinterestIcon from "../../assets/pintester_icon.png";
import logopic from "../../assets/logo.png";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-brand">
          <img src={logopic} alt="" />
          <h2 className="footer-logo">Shopper</h2>
          <p>Style your life with our exclusive clothing collections.</p>
        </div>

        <div className="footer-links">
          <h4>Shop</h4>
          <ul>
            <Link to={"/men"}>
              <a >Men's Clothing</a>
            </Link>
            <li>
              <a href="/womens">Women's Clothing</a>
            </li>
            <li>
              <a href="/new">New Arrivals</a>
            </li>
            <li>
              <a href="/sale">Sale</a>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Customer Care</h4>
          <ul>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/shipping">Shipping & Returns</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img
                src={facebookIcon}
                alt="Facebook"
                className="social-icon-img"
              />
            </a>
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="social-icon-img"
              />
            </a>
            <a
              href="https://twitter.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <img
                src={twitterIcon}
                alt="Twitter"
                className="social-icon-img"
              />
            </a>
            <a
              href="https://pinterest.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
            >
              <img
                src={pinterestIcon}
                alt="Pinterest"
                className="social-icon-img"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Shopper. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
