import React from "react";
import "./collection.css";
import new_collections from "../../assets/new_collections";
import Items from "../items/Items";
function Newcollections() {
  return (
    <div className="collection-container ">
      {/* <h2 className="col-h  cool-glow-text">New Collections</h2> */}
      <h2 className="col-h">New Collections</h2>

      <div className="collection-items">
        {new_collections.map((item, id) => (
          <Items
            key={id}
            Pname={item.name}
            Pimg={item.image}
            Nprice={item.new_price}
            Oprice={item.old_price}
            id={item.id}
            product={"new_collection"}
          />
        ))}
      </div>
    </div>
  ); 
}

export default Newcollections;
