import { Route, Routes } from "react-router-dom";
import Header from "./users/components/Header";
import Home from "./users/pages/Home";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import Auth from "./pages/Auth";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import AllBooks from "./users/pages/AllBooks";
import Careers from "./users/pages/Careers";
import Contact from "./users/pages/Contact";
import Profile from "./users/pages/Profile";
import AdminHome from "./admin/pages/AdminHome";
import AdminBooks from "./admin/pages/AdminBooks";
import AdminCareers from "./admin/pages/AdminCareers";
import AdminSettings from "./admin/pages/AdminSettings";
import ViewBook from "./users/pages/ViewBook";

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
        <Route path="/career" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/view-book" element={<ViewBook />} />

        <Route
          path="/admin-home"
          element={isLoading ? <Preloader /> : <AdminHome />}
        />
        <Route path="/admin-books" element={<AdminBooks />} />
        <Route path="/admin-careers" element={<AdminCareers />} />
        <Route path="/admin-settings" element={<AdminSettings />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
