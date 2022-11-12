import React from "react";
import Sidebar from "./SideBar";
function Dashboard() {
  return (
    <div className="grid mt-16 sm:grid-cols-2 h-screen w-screen">
      <Sidebar />
      <div className="sm:cols-span-1 shadow-lg grid p-5 grid-cols-2 gap-3 h-screen bg-black rounded-md">
        <div className="h-36 rounded-lg bg-purple-100"></div>
        <div className="h-36 rounded-lg bg-purple-100"></div>
        <div className="h-36 rounded-lg bg-purple-100"></div>
        <div className="h-36 rounded-lg bg-purple-100"></div>
        <div className="h-36 rounded-lg bg-purple-100"></div>
        <div className="h-36 rounded-lg bg-purple-100"></div>
      </div>
    </div>
  );
}
export default Dashboard;