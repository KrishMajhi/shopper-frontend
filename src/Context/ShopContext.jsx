import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import popular_data from "../assets/data.js";
import all_products from "../assets/all_product.js";
import collection_products from "../assets/new_collections.js";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load from localStorage on first render
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Save to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find((itm) => itm.id === item.id);
      if (exists) return prevItems;
      return [...prevItems, item];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };
  const updateincart = (itemid, newTotal, newQty) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemid ? { ...item, pTotal: newTotal, qty: newQty } : item
      )
    );
  };

  const contextValue = {
    all_products,
    popular_data,
    collection_products,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    updateincart,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;

// Custom hook
export const useShop = () => useContext(ShopContext);
