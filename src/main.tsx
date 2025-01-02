import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../src/components/App/App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);