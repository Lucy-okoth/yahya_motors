import React from 'react'
import Sidebar from './SideBar'
import { Outlet } from 'react-router-dom';


function Dashboard() {
  return (
    <div className="flex flex-row mt-16  h-screen w-screen">
      <Sidebar />
      {/* <Outlet /> */}
      <div className="w-full shadow-lg  p-5  gap-3 h-screen  rounded-md">
        {/* <div className="h-36 rounded-lg bg-purple-100"></div>
        <div className="h-36 rounded-lg bg-purple-100"></div>
        <div className="h-36 rounded-lg bg-purple-100"></div>
        <div className="h-36 rounded-lg bg-purple-100"></div>
        <div className="h-36 rounded-lg bg-purple-100"></div>
        <div className="h-36 rounded-lg bg-purple-100"></div> */}
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
