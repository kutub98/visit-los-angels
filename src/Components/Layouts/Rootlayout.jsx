/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from 'react-router-dom';
import Navbar1 from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Rootlayout = () => {
  return (
    <div>
      <Navbar1 />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Rootlayout;
