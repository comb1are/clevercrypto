import React from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

// Fonts
import "./assets/fonts/nebulas/stylesheet.css";
import "./assets/fonts/SFCompactText/stylesheet.css";
import "./assets/fonts/nagel/stylesheet.css";
import "./assets/fonts/SFProDisplay/stylesheet.css";
import "./assets/fonts/HelveticaNeue/stylesheet.css";
import "./assets/fonts/SFProText/stylesheet.css";

import "./index.css";
import "./assets/scss/style.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MemoryRouter initialEntries={['/paying/faild']}>
      <App />
    </MemoryRouter>
  </React.StrictMode>
);
