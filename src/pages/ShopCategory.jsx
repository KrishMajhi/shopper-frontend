import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Items from "../components/items/Items";
import "./css/ShopCategory.css";
import Footer from "../components/Footer/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";
function ShopCategory({ category, banner }) {
  const { all_products } = useContext(ShopContext);
  useScrollReveal();
  const items = all_products.filter(p => p.category === category);
  const label = category === "kid" ? "Kids" : category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <div>
      <div className="cat-page">
        <div className="cat-banner-wrap reveal">
          <img src={banner} className="cat-banner" alt={`${label} banner`} />
          <div className="cat-banner-overlay">
            <span className="section-eyebrow">Collection</span>
            <h1 className="cat-title">{label}'s Collection</h1>
            <p className="cat-count">{items.length} pieces</p>
          </div>
        </div>
        <div className="cat-grid reveal reveal-delay-2">
          {items.map((item, i) => (
            <Items key={i} Pname={item.name} Pimg={item.image} Nprice={item.new_price} Oprice={item.old_price} id={item.id} desc={item.description} product="all_product" />
          ))}
          {items.length === 0 && <p className="cat-empty">No products found in this category.</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ShopCategory;
