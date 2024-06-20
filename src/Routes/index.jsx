import { createBrowserRouter } from 'react-router-dom';
import Register from '../Components/Pages/Register';
import Login from '../Components/Pages/Login';
import Home from '../Components/Pages/Home';
import Rootlayout from '../Components/Layouts/Rootlayout';
import GuideToLosAnglesPark from '../Components/Pages/GuideToLosAnglesPark';
import ThingsToDo from '../Components/Pages/ThingsToDo';
import EventHotel from '../Components/Pages/EventHotel';
import Events from '../Components/Pages/Events';
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

    ],
  },
]);
export default route;
