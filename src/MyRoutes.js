import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddAuto from "./pages/AddAuto";
import AdminPanel from "./pages/AdminPanel";
import HomePage from "./pages/HomePage";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<AddAuto />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/" elment={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
