import { createBrowserRouter } from 'react-router-dom';
import Register from '../Components/Pages/Register';
import Login from '../Components/Pages/Login';
import Home from '../Components/Pages/Home';

import Rootlayout from '../Components/Layouts/Rootlayout';
import EventHotel from '../Components/Pages/EventHotel';
import GuideToLosAnglesPark from '../Components/Pages/GuideToLosAnglesPark';
const route = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout></Rootlayout>,

    children: [
      { path: '/', element: <Home></Home> },
      { path: '/Home', element: <Home></Home> },
      { path: '/login', element: <Login></Login> },
      { path: '/register', element: <Register></Register> },
      { path: '/event-hotel', element: <EventHotel /> },
      { path: '/guideForPark', element: <GuideToLosAnglesPark /> },
    ],
  },
]);
export default route;
