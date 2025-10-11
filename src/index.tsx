import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PetProvider } from "./context/PetContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Dodajemo oba konteksta */}
      <AuthProvider>
        <PetProvider>
          <App />
        </PetProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

