import React, { useState, useEffect } from "react";
import "./Offer.css";
import imgOffer1 from "../../assets/men.png";
import imgOffer2 from "../../assets/girl.png";
import imgOffer3 from "../../assets/men2.png";
const SLIDES = [
  { heading:"Exclusive For You", desc:"Only on Best Sellers products", img:imgOffer1, tag:"Best Sellers" },
  { heading:"Summer Sale is Live", desc:"Up to 50% off on selected items", img:imgOffer2, tag:"Up to 50% OFF" },
  { heading:"Limited Time Deal", desc:"Grab your favorites before they're gone", img:imgOffer3, tag:"Ends Soon" },
];
function Offer() {
  const [cur, setCur] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setCur(p => (p + 1) % SLIDES.length), 3500);
    return () => clearInterval(id);
  }, [paused]);
  const s = SLIDES[cur];
  return (
    <section className="offer-section reveal">
      <div className="offer-header">
        <span className="section-eyebrow">Special Offers</span>
        <h2 className="section-title">Deals Made For You</h2>
      </div>
      <div className="offer-card" style={{ '--offer-idx': cur }}>
        <div className="offer-text">
          <span className="offer-tag">{s.tag}</span>
          <h3 className="offer-heading">{s.heading}</h3>
          <p className="offer-desc">{s.desc}</p>
          <button className="offer-cta">Shop Now →</button>
        </div>
        <img src={s.img} alt="offer" className="offer-img" />
      </div>
      <div className="offer-controls">
        <div className="offer-dots">
          {SLIDES.map((_, i) => <button key={i} className={`dot${i===cur?" active":""}`} onClick={() => setCur(i)} />)}
        </div>
        <button className="pause-btn" onClick={() => setPaused(p => !p)}>{paused ? "▶ Resume" : "⏸ Pause"}</button>
      </div>
    </section>
  );
}
export default Offer;
