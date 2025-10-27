import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // tu CSS personalizado
import "./App.css"; // estilos globales y componentes

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);