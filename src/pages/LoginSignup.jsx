import React, { useState } from "react";
import "./css/LoginSignup.css";
function LoginSignup() {
  const [agreed, setAgreed] = useState(false);
  const [tab, setTab] = useState("login");
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (tab==="signup" && !agreed) { alert("Please agree to the terms."); return; }
    setDone(true);
  };
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">SHOPPER</div>
        <div className="auth-tabs">
          <button className={tab==="login"?"tab active":"tab"} onClick={()=>setTab("login")}>Sign In</button>
          <button className={tab==="signup"?"tab active":"tab"} onClick={()=>setTab("signup")}>Create Account</button>
        </div>
        {done ? (
          <div className="auth-success">
            <span className="auth-success-icon">✓</span>
            <h3>{tab==="login"?"Welcome back!":"Account created!"}</h3>
            <p>{tab==="login"?"You are now signed in.":"Welcome to Shopper."}</p>
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            {tab==="signup" && (
              <div className="auth-field"><label>Full Name</label><input type="text" placeholder="Your name" required /></div>
            )}
            <div className="auth-field"><label>Email</label><input type="email" placeholder="you@example.com" required /></div>
            <div className="auth-field"><label>Password</label><input type="password" placeholder="••••••••" required /></div>
            {tab==="signup" && (
              <label className="auth-agree">
                <input type="checkbox" checked={agreed} onChange={e=>setAgreed(e.target.checked)} />
                <span>I agree to the <a href="#">Terms & Conditions</a></span>
              </label>
            )}
            {tab==="login" && (
              <div className="auth-options">
                <label className="auth-remember"><input type="checkbox" /> Remember me</label>
                <a href="#" className="auth-forgot">Forgot password?</a>
              </div>
            )}
            <button type="submit" className="auth-submit">{tab==="login"?"Sign In →":"Create Account →"}</button>
          </form>
        )}
      </div>
    </div>
  );
}
export default LoginSignup;
