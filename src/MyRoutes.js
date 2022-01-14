import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminProvider from "./contexts/AdminProvider";
import ClientProvider from "./contexts/ClientProvider";
import AddAuto from "./pages/AddAuto";
import AdminPanel from "./pages/AdminPanel";
import HomePage from "./pages/HomePage";
import MyNavbar from "./components/MyNavbar";
import AuthProvider from "./contexts/AuthProvider";
import AutoCart from "./pages/AutoCart";
import MyCreditCard from "./components/MyCreditCard";

const MyRoutes = () => {
  return (
    <AuthProvider>
      <AdminProvider>
        <ClientProvider>
          <BrowserRouter>
            <MyNavbar />
            <Routes>
              <Route path="/add" element={<AddAuto />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<AutoCart />} />
              <Route path="/buy" element={<MyCreditCard />} />
            </Routes>
          </BrowserRouter>
        </ClientProvider>
      </AdminProvider>
    </AuthProvider>
  );
};

export default MyRoutes;
