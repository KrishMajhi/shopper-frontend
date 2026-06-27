import React from "react";
import "./collection.css";
import { useShop } from "../../Context/ShopContext";
import Items from "../items/Items";
function Newcollections() {
  const { collection_products } = useShop();
  return (
    <section className="collection">
      <div className="section-head reveal">
        <span className="section-eyebrow">Just In</span>
        <h2 className="section-title">New Collections</h2>
      </div>
      <div className="collection-grid reveal reveal-delay-2">
        {collection_products.map((item, i) => (
          <Items key={i} Pname={item.name} Pimg={item.image} Nprice={item.new_price} Oprice={item.old_price} id={item.id} product="new_collection" />
        ))}
      </div>
    </section>
  );
}
export default Newcollections;
