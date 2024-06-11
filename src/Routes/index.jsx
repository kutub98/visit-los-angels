import { createBrowserRouter } from 'react-router-dom';
import Register from '../Components/Pages/Register';
import Login from '../Components/Pages/Login';
import Home from '../Components/Pages/Home';

import Rootlayout from '../Components/Layouts/Rootlayout';
const route = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout></Rootlayout>,

    children: [
      { path: '/', element: <Home></Home> },
      { path: 'Home', element: <Home></Home> },
      { path: 'login', element: <Login></Login> },
      { path: 'register', element: <Register></Register> },
    ],
  },
]);
export default route;
