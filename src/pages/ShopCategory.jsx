import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Items from "../components/items/Items";

import "./css/ShopCategory.css";
import Footer from "../components/Footer/Footer";
import FooterShop from "../components/footershop/FooterShop";
import all_product from "../assets/all_product.js";

function ShopCategory({ category, banner }) {
  const { all_products } = useContext(ShopContext);

  const filteredItems = all_products.filter(
    (item) => item.category === category
  );

  return (
    <div>
      <div className="category-container">
        <img src={banner} className="banner" alt="" />
        <div className="category-items-horizontal">
          {filteredItems.map((item, id) => (
            <Items
              key={id}
              Pname={item.name}
              Pimg={item.image}
              Nprice={item.new_price}
              Oprice={item.old_price}
             id={item.id}
             desc={item.description}
             product={"all_product"}
            />
          ))}
        </div>
      
      </div>
      <FooterShop/>
    </div>
  );
}

export default ShopCategory;
