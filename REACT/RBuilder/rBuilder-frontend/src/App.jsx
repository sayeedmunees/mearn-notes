import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ResumeGenerator from "./pages/ResumeGenerator";
import Form from "./pages/Form";
import History from "./pages/History";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/resumegenerator" element={<ResumeGenerator />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
