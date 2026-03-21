import React from "react";
import "./Popular.css";
import Items from "../items/Items";
import data_product from "../../assets/data";
function Popular() {
  return (
    <div className="popular-container">
      <h1>Popular Collections</h1>

      <div className="popular-items">
        {data_product.map((item, i) => (
          <Items
            key={i}
            Pimg={item.image}
            Pname={item.name}
            Nprice={item.new_price}
            Oprice={item.old_price}
            id={item.id}
            product={"popular_data"}
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;
