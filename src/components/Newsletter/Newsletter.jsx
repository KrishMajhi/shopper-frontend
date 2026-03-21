import React from "react";
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter-container">
      <h2 className="col-h" style={{color:"#73a286"}}>Stay Updated!</h2>
      <p className="newsletter-text">
        Subscribe to our newsletter and be the first to know about new collections, exclusive deals, and more.
      </p>
      <form className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
          className="newsletter-input"
          required
        />
        <button type="submit" className="newsletter-button">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
