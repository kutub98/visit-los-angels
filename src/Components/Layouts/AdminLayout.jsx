/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from 'react-router-dom';
import { DashHeader } from '../AdminComponents/DashHeader';
import { DashSideBar } from '../AdminComponents/DashSidebar';

const AdminLayout = () => {
  return (
    <div className=" w-full max-w-7xl mx-auto mb-4">
      <div className=" w-full sticky top-0  z-50">
        <DashHeader />
      </div>
      <div className="flex mt-2">
        <div className="">
          <DashSideBar />
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
