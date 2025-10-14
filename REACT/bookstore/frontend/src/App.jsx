import { Route, Routes } from "react-router-dom";
import Header from "./users/components/Header";
import Home from "./users/pages/Home";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import Auth from "./pages/Auth";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import AllBooks from "./users/pages/AllBooks";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={isLoading ? <Preloader /> : <Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth register />} />
        <Route path="/all-books" element={<AllBooks />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
