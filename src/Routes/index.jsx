/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from 'react-router-dom';
import Register from '../Components/Pages/Register';
import Home from '../Components/Pages/Home';
import Rootlayout from '../Components/Layouts/Rootlayout';
import GuideToLosAnglesPark from '../Components/Pages/GuideToLosAnglesPark';
import ThingsToDo from '../Components/Pages/ThingsToDo';
import EventHotel from '../Components/Pages/EventHotel';
import Visit from '../Components/Pages/Visit';
import Events from '../Components/Pages/Events';
import AdminLayout from '../Components/Layouts/AdminLayout';
import AddBanner from '../Components/AdminComponents/Banner/AddBanner';
import Login from '../Components/Pages/Login';
import AddData from '../Components/AdminComponents/AddData/AddData';
import Quota from '../Components/AdminComponents/Quota/Quota';
import VideoStreaming from '../Components/AdminComponents/VideoStreaming/VideoStreaming';
import AdvertiseImg from '../Components/AdminComponents/AdvertiseImg/AdvertiseImg';
import CreateEvents from '../Components/AdminComponents/CreateEvents/CreateEvents';

// import PrivateRoute from '../Auth/PrivateRoute';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout></Rootlayout>,

    children: [
      { path: '/', element: <Home></Home> },
      { path: '/Home', element: <Home></Home> },
      { path: '/login', element: <Login></Login> },
      { path: '/register', element: <Register></Register> },

      { path: '/events', element: <Events /> },
      { path: '/event-hotel', element: <EventHotel /> },
      { path: '/eventHotel', element: <EventHotel /> },
      { path: '/guideForPark', element: <GuideToLosAnglesPark /> },
      { path: '/thingstodo', element: <ThingsToDo /> },
      { path: '/visit', element: <Visit /> }
    ]
  },
  {
    path: '/admin',

    element: <AdminLayout />,
    children: [
      {
        index: 'admin/addData',
        element: <AddData />
      },
      {
        path: '/admin/slider',
        element: <AddBanner />
      },
      {
        path: '/admin/addData',
        element: <AddData />
      },
      {
        path: '/admin/VideoStreaming',
        element: <VideoStreaming />
      },
      {
        path: '/admin/advertisement',
        element: <AdvertiseImg />
      },
      {
        path: '/admin/quota',
        element: <Quota />
      },
      {
        path: '/admin/createEvent',
        element: <CreateEvents />
      }
    ]
  }
]);
export default route;
