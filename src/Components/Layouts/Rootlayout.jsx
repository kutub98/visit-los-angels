import { Outlet } from 'react-router-dom';
import  Navbar1 from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Rootlayout = () => {
  return (
    <div>
      <Navbar1 />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Rootlayout;
