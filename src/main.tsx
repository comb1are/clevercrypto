import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Fonts
import "./assets/fonts/nebulas/stylesheet.css";
import "./assets/fonts/SFCompactText/stylesheet.css";
import "./assets/fonts/nagel/stylesheet.css";
import "./assets/fonts/SFProDisplay/stylesheet.css";
import "./assets/fonts/HelveticaNeue/stylesheet.css";
import "./assets/fonts/SFProText/stylesheet.css";

import "./assets/scss/style.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
