import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { ApiContext } from "./services/api-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApiContext>
      <HashRouter>
        <App />
      </HashRouter>
    </ApiContext>
  </React.StrictMode>
);
