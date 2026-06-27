import React from "react";
import "./Popular.css";
import Items from "../items/Items";
import { useShop } from "../../Context/ShopContext";
function Popular() {
  const { popular_data } = useShop();
  return (
    <section className="popular">
      <div className="section-head reveal">
        <span className="section-eyebrow">Trending Now</span>
        <h2 className="section-title">Popular Picks</h2>
      </div>
      <div className="popular-grid reveal reveal-delay-2">
        {popular_data.map((item, i) => (
          <Items key={i} Pimg={item.image} Pname={item.name} Nprice={item.new_price} Oprice={item.old_price} id={item.id} product="popular_data" />
        ))}
      </div>
    </section>
  );
}
export default Popular;
