import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/main.css";

import { HelmetProvider } from "react-helmet-async";
import PageRoutes from "./routes/PageRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <StrictMode>
      <PageRoutes />
    </StrictMode>
  </HelmetProvider>,
);
