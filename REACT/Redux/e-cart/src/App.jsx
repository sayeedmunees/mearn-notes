import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import View from "./pages/View";
import Pnf from "./pages/Pnf";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:id/view" element={<View />} />
        <Route path="/*" element={<Pnf />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
