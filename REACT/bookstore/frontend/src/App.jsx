import { Route, Routes } from "react-router-dom";
import Header from "./users/components/Header";
import Home from "./users/pages/Home";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import Auth from "./pages/Auth";
import Preloader from "./components/Preloader";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Preloader />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
