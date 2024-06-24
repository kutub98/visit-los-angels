import { createBrowserRouter } from 'react-router-dom';
import Register from '../Components/Pages/Register';
import Login from '../Components/Pages/Login';
import Home from '../Components/Pages/Home';
import Rootlayout from '../Components/Layouts/Rootlayout';
import GuideToLosAnglesPark from '../Components/Pages/GuideToLosAnglesPark';
import ThingsToDo from '../Components/Pages/ThingsToDo';
import EventHotel from '../Components/Pages/EventHotel';
<<<<<<< HEAD
import Visit from '../Components/Pages/Visit';
=======

import Visit from '../Components/Pages/Visit';

import Events from '../Components/Pages/Events';

>>>>>>> 944d7bae0cd2eb49175cb45d3628cbdc37a1b3fd
const route = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout></Rootlayout>,

    children: [
      { path: '/', element: <Home></Home> },
      { path: '/Home', element: <Home></Home> },
      { path: '/login', element: <Login></Login> },
      { path: '/register', element: <Register></Register> },

      { path: '/events', element: <Events/> },
      { path: '/event-hotel', element: <EventHotel/> },
      { path: '/eventHotel', element: <EventHotel /> },
      { path: '/guideForPark', element: <GuideToLosAnglesPark /> },
      { path: '/thingstodo', element: <ThingsToDo /> },
<<<<<<< HEAD
=======

>>>>>>> 944d7bae0cd2eb49175cb45d3628cbdc37a1b3fd
      { path: '/visit', element: <Visit /> },
    ],
  },
]);
export default route;
