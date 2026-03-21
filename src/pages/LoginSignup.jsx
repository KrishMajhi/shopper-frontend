import React, { useState } from "react";
import './css/LoginSignup.css';

function LoginSignup() {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    alert("Login successful!");
  };

  return (
    <div className="loginSignup-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">🛍️ Login to ShopSmart</h2>

        <input type="text" placeholder="Email or Username" required />
        <input type="password" placeholder="Password" required />

        <div className="form-options">
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span>I agree to the <a href="#">terms</a></span>
          </label>
          <a href="#" className="forgot-password">Forgot password?</a>
        </div>

        <button type="submit">Login</button>

        <div className="signup-link">
          Don’t have an account? <a href="#">Sign up</a>
        </div>
      </form>
    </div>
  );
}

export default LoginSignup;
