import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import StorefrontProvider from "./providers/StorefrontProvider";
import ThemeProvider from "./theme/ThemeProvider";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StorefrontProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StorefrontProvider>
  </React.StrictMode>,
);
