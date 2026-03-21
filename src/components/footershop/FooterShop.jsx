import React from "react";
import "./FooterShop.css";
import facebookIcon from "../../assets/whatsapp_icon.png";
import instagramIcon from "../../assets/instagram_icon.png";
import twitterIcon from "../../assets/twitter-logo.png";
import pinterestIcon from "../../assets/pintester_icon.png";
import logopic from "../../assets/logo.png";

function FooterShop() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <img src={logopic} alt="Shopper Logo" />
          <h2 className="footer__logo">Shopper</h2>
          <p className="footer__tagline">
            Style your life with our exclusive clothing collections.
          </p>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">Shop</h4>
          <ul className="footer__list">
            <li><a href="/mens">Men's Clothing</a></li>
            <li><a href="/womens">Women's Clothing</a></li>
            <li><a href="/new">New Arrivals</a></li>
            <li><a href="/sale">Sale</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">Customer Care</h4>
          <ul className="footer__list">
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/shipping">Shipping & Returns</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer__section footer__social">
          <h4 className="footer__heading">Follow Us</h4>
          <div className="footer__icons">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" className="footer__icon" />
            </a>
            <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" className="footer__icon" />
            </a>
            <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src={twitterIcon} alt="Twitter" className="footer__icon" />
            </a>
            <a href="https://pinterest.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <img src={pinterestIcon} alt="Pinterest" className="footer__icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2025 Shopper. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default FooterShop;
