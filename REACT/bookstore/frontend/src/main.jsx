import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Contextshare from "./context/ContextShare.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="883098697354-ngqpemjqhpdrd8a3568tnoj66ab38d2f.apps.googleusercontent.com">
        <Contextshare>
          <App />
        </Contextshare>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
);
