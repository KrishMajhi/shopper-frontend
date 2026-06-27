import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar/Navbar";
import Errorcomp from "./components/Errorcomp/comp";
import WishlistPanel from "./components/Wishlist/WishlistPanel";

const BANNERS = {
  men:   "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=1100&h=300&fit=crop",
  women: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1100&h=300&fit=crop",
  kids:  "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=1100&h=300&fit=crop",
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <WishlistPanel />
      <Routes>
        <Route path="/"        element={<Home />} errorElement={<Errorcomp />} />
        <Route path="/error"   element={<Errorcomp />} />
        <Route path="/men"     element={<ShopCategory banner={BANNERS.men}   category="men"   />} />
        <Route path="/women"   element={<ShopCategory banner={BANNERS.women} category="women" />} />
        <Route path="/kids"    element={<ShopCategory banner={BANNERS.kids}  category="kid"   />} />
        <Route path="/products" element={<Product />}>
          <Route path=":productid" />
        </Route>
        <Route path="/cart"    element={<Cart />} />
        <Route path="/login"   element={<LoginSignup />} />
        <Route path="/admin"   element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
