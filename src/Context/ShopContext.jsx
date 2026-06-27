import React, { createContext, useContext, useState, useEffect } from "react";
import popular_data from "../assets/data.js";
import all_products_static from "../assets/all_product.js";
import collection_products_static from "../assets/new_collections.js";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem("cartItems")) || []; } catch { return []; }
  });
  useEffect(() => { localStorage.setItem("cartItems", JSON.stringify(cartItems)); }, [cartItems]);

  const addToCart = (item) =>
    setCartItems((prev) => prev.find((i) => i.id === item.id) ? prev : [...prev, item]);
  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  const updateincart = (id, newTotal, newQty) =>
    setCartItems((prev) => prev.map((i) => i.id === id ? { ...i, pTotal: newTotal, qty: newQty } : i));

  const [wishlist, setWishlist] = useState(() => {
    try { return JSON.parse(localStorage.getItem("wishlist")) || []; } catch { return []; }
  });
  const [wishlistOpen, setWishlistOpen] = useState(false);
  useEffect(() => { localStorage.setItem("wishlist", JSON.stringify(wishlist)); }, [wishlist]);

  const toggleWishlist = (product) =>
    setWishlist((prev) => prev.find((i) => i.id === product.id) ? prev.filter((i) => i.id !== product.id) : [...prev, product]);
  const isWishlisted = (id) => wishlist.some((i) => i.id === id);

  const [customProducts, setCustomProducts] = useState(() => {
    try { return JSON.parse(localStorage.getItem("customProducts")) || []; } catch { return []; }
  });
  useEffect(() => { localStorage.setItem("customProducts", JSON.stringify(customProducts)); }, [customProducts]);

  const addProduct = (product) => {
    const newId = Date.now();
    setCustomProducts((prev) => [...prev, { ...product, id: newId, isCustom: true }]);
  };
  const updateProduct = (id, updates) =>
    setCustomProducts((prev) => prev.map((p) => p.id === id ? { ...p, ...updates } : p));
  const deleteProduct = (id) =>
    setCustomProducts((prev) => prev.filter((p) => p.id !== id));

  const customByCategory = (cat) => customProducts.filter((p) => p.sourceList === cat);
  const all_products = [...all_products_static, ...customByCategory("all_product")];
  const collection_products = [...collection_products_static, ...customByCategory("new_collection")];
  const popularData = [...popular_data, ...customByCategory("popular_data")];

  return (
    <ShopContext.Provider value={{
      all_products, popular_data: popularData, collection_products, customProducts,
      cartItems, setCartItems, addToCart, removeFromCart, updateincart,
      wishlist, wishlistOpen, setWishlistOpen, toggleWishlist, isWishlisted,
      addProduct, updateProduct, deleteProduct,
    }}>
      {children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
export const useShop = () => useContext(ShopContext);
