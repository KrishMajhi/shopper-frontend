import React from "react";
import "./Marquee.css";
const WORDS = ["New Arrivals", "·", "Exclusive Drops", "·", "Free Shipping", "·", "Premium Quality", "·", "Members Only", "·", "Limited Edition", "·"];
function Marquee() {
  const items = [...WORDS, ...WORDS];
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.map((w, i) => <span key={i} className={w === "·" ? "marquee-dot" : "marquee-word"}>{w}</span>)}
      </div>
    </div>
  );
}
export default Marquee;
