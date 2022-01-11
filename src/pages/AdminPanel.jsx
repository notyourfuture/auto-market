import React from "react";
import { ToastContainer } from "react-toastify";
import MyTable from "../components/MyTable";

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <h2>ADMIN ROOM</h2>
      <MyTable />
      <ToastContainer />
    </div>
  );
};

export default AdminPanel;
