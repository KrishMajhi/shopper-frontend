import React, { useState } from "react";
import "./Newsletter.css";
function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const handle = (e) => { e.preventDefault(); if(email) setDone(true); };
  return (
    <section className="nl-section reveal">
      <div className="nl-inner">
        <span className="section-eyebrow">Stay in the Loop</span>
        <h2 className="nl-title">Get Exclusive Access</h2>
        <p className="nl-sub">Be first to know about new drops, member-only deals, and style tips.</p>
        {done ? (
          <p className="nl-thanks">✓ You're on the list! Watch your inbox.</p>
        ) : (
          <form className="nl-form" onSubmit={handle}>
            <input type="email" placeholder="your@email.com" value={email} onChange={e=>setEmail(e.target.value)} className="nl-input" required />
            <button type="submit" className="nl-btn">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}
export default Newsletter;
