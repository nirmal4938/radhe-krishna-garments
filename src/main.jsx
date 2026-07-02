// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { TenantProvider } from "./context/TenantContext";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <TenantProvider>
//       <App />
//     </TenantProvider>
//   </StrictMode>,
// );

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import StorefrontProvider from "./providers/StorefrontProvider";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StorefrontProvider>
      <App />
    </StorefrontProvider>
  </React.StrictMode>,
);
