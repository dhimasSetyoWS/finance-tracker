import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import MainDashboard from "./pages/MainDashboard";
import IncomeDashboard from "./pages/IncomeDashboard";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard/main" element={<MainDashboard />} />
      <Route path="/dashboard/income" element={<IncomeDashboard />} />
    </Routes>
  </BrowserRouter>,
);
