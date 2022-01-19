import React from "react";
import { ToastContainer } from "react-toastify";
import MyTable from "../components/MyTable";

const AdminPanel = () => {
  return (
    <div className="admin-panel" style={{ marginTop: "120px" }}>
      <h2>ADMIN ROOM</h2>
      <MyTable />
      <ToastContainer />
    </div>
  );
};

export default AdminPanel;
