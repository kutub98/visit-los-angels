import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import route from './Routes/index.jsx';
// import { AuthProvider } from './Context/Auth/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}>
      {/* <AuthProvider> */}
      <App />
      {/* </AuthProvider> */}
    </RouterProvider>
  </React.StrictMode>
);
