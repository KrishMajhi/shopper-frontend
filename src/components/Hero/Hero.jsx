import React, { useEffect, useState } from "react";
import "./Hero.css";
import heroImg from "../../assets/hero_image.png";
import { Link } from "react-router-dom";

const STATS = [
  { value: "12K+", label: "Products" },
  { value: "98%",  label: "Satisfaction" },
  { value: "3",    label: "Collections" },
];

function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);
  return (
    <section className="hero">
      <div className="hero-grid" />
      <div className={`hero-left${mounted ? " in" : ""}`}>
        <span className="hero-eyebrow">New Season · SS 2025</span>
        <h1 className="hero-headline">Style That<br /><em>Speaks</em><br />For You</h1>
        <p className="hero-sub">Curated fashion for every moment — discover pieces that define you.</p>
        <div className="hero-cta">
          <Link to="/women"><button className="cta-primary">Shop Collection</button></Link>
          <Link to="/men"><button className="cta-ghost">Explore Men →</button></Link>
        </div>
        <div className="hero-stats">
          {STATS.map((s, i) => (
            <div key={i} className="stat">
              <span className="stat-val">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={`hero-right${mounted ? " in" : ""}`}>
        <div className="hero-img-frame">
          <img src={heroImg} alt="Fashion" className="hero-img" />
        </div>
        <div className="price-sticker">
          <span className="sticker-top">New In</span>
          <span className="sticker-main">SS/25</span>
          <span className="sticker-bottom">Collection</span>
        </div>
        <div className="floating-tag tag-1"><span>New Arrivals</span></div>
        <div className="floating-tag tag-2"><span>Best Sellers</span></div>
      </div>
    </section>
  );
}
export default Hero;
