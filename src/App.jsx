import React from "react";
import "./styles/global.css";
import AdminDataProvider from "./context/Provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

const App = () => {
  return (
    <AdminDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pages/about-us" element={<About />} />
        </Routes>
      </BrowserRouter>
    </AdminDataProvider>
  );
};

export default App;
