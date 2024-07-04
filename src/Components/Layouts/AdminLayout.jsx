/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from 'react-router-dom';
import { DashHeader } from '../AdminComponents/DashHeader';
import DashSideBar from '../AdminComponents/DashSidebar';
import { useState } from 'react';
// import { DashSideBar } from '../AdminComponents/DashSidebar';

const AdminLayout = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className=" w-full max-w-7xl mx-auto mb-4">
      <div className=" w-full sticky top-0  z-[991]">
        <DashHeader />
      </div>
      <div className="flex mt-2 w-full max-w-7xl mx-auto customScrollBar  overflow-x-scroll">
        <div className={`z-[990]`}>
          <DashSideBar />
        </div>

        <div className={`w-full sticky  `}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
