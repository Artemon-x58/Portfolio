import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import { GlobalStyles } from "./Components/GlobalStyle/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
