// import React from "react";
// import "./Items.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import { useShop } from "../../Context/ShopContext";

// function Items({ Pimg, Pname, Nprice, Oprice, id, desc, product }) {
//   const {
//     all_products,
//     popular_data,
//     collection_products,
//     cartItems,
//     addToCart,
//     removeFromCart,
//   } = useShop();

//   const isincart = cartItems.some((item) => item.id === id); 

//   const handleCartClick = (itemId) => {
//     let item = null;

//     if (product === "all_product") {
//       item = all_products.find((itm) => itm.id === itemId);
//     } else if (product === "popular_data") {
//       item = popular_data.find((itm) => itm.id === itemId);
//     } else if (product === "new_collection") {
//       item = collection_products.find((itm) => itm.id === itemId);
//     }

//     if (!item) return;

//     if (isincart) {
//       removeFromCart(itemId);
//     } else {
//       addToCart({
//         id: id,
//         image: Pimg,
//         name: Pname,
//         description: desc,
//         product:product,
//         qty: 1,
//         pTotal: Number(Nprice),
//         Price: Nprice,
//       });
//     }
//   };

//   return (
//     <div className="item-container">
//       <Link to={`/products/${id}`}>
//         <img className="product-img" src={Pimg} alt={Pname} />
//       </Link>

//       <div className="about-product">
//         <p className="details">{Pname}</p>

//         <div className="price-cart">
//           <h3 className="price">
//             <b>$</b>
//             {Nprice}
//           </h3>
//           <FontAwesomeIcon
//             icon={faCartPlus}
//             className={`cart-icon ${isincart ? "cart-clicked" : ""}`}
//             onClick={() => handleCartClick(id)}
//           />
//         </div>

//         <h3 className="discount">
//           <b>$</b>
//           {Oprice}
//         </h3>
//       </div>
//     </div>
//   );
// }

// export default Items;


















import React from "react";
import "./Items.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useShop } from "../../Context/ShopContext";

function Items({ Pimg, Pname, Nprice, Oprice, id, desc, product }) {
  const {
    all_products,
    popular_data,
    collection_products,
    cartItems,
    addToCart,
    removeFromCart,
  } = useShop();

  const isincart = cartItems.some((item) => item.id === id);

  const handleCartClick = (itemId) => {
    let item = null;

    if (product === "all_product") {
      item = all_products.find((itm) => itm.id === itemId);
    } else if (product === "popular_data") {
      item = popular_data.find((itm) => itm.id === itemId);
    } else if (product === "new_collection") {
      item = collection_products.find((itm) => itm.id === itemId);
    }

    if (!item) return;

    if (isincart) {
      removeFromCart(itemId);
    } else {
      addToCart({
        id,
        image: Pimg,
        name: Pname,
        description: desc,
        product,
        qty: 1,
        pTotal: Number(Nprice),
        Price: Nprice,
      });
    }
  };

  return (
    <div className="item-container">
      <Link to={`/products/${id}`}>
        <img
          className="product-img"
          src={Pimg}
          alt={Pname}
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData("drag-product-id", id);
            e.dataTransfer.setData("drag-product-type", product);
            e.dataTransfer.setDragImage(e.target, e.target.width / 2, e.target.height / 2);
            // // Start detecting overlap
            // const interval = setInterval(() => {
            //   const cartIcon = document.getElementById("cart-drop-target");
            //   if (!cartIcon) return;

            //   const cartRect = cartIcon.getBoundingClientRect();
            //   const dragRect = e.target.getBoundingClientRect();

            //   const isTouching =
            //     dragRect.right > cartRect.left &&
            //     dragRect.left < cartRect.right &&
            //     dragRect.bottom > cartRect.top &&
            //     dragRect.top < cartRect.bottom;

            //   if (isTouching && !cartItems.some((item) => item.id === id)) {
            //     clearInterval(interval);
            //     handleCartClick(id);
            //   }
            // }, 100);

            // // Cleanup interval on drag end
            // e.target.addEventListener("dragend", () => {
            //   clearInterval(interval);
            // }, { once: true });
          }}
        />
      </Link>

      <div className="about-product">
        <p className="details">{Pname}</p>

        <div className="price-cart">
          <h3 className="price">
            <b>$</b>{Nprice}
          </h3>
          <FontAwesomeIcon
            icon={faCartPlus}
            className={`cart-icon ${isincart ? "cart-clicked" : ""}`}
            onClick={() => handleCartClick(id)}
          />
        </div>

        <h3 className="discount">
          <b>$</b>{Oprice}
        </h3>
      </div>
    </div>
  );
}

export default Items;
