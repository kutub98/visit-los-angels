// src/components/PrivateRoute.js
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';
//  // Adjust path as per your project structure

// const PrivateRoute = ({ element, ...rest }) => {
//   const { isLoggedIn } = useAuth(); // Correctly use useAuth to get isLoggedIn

//   return isLoggedIn ? (
//     <Route {...rest} element={element} />
//   ) : (
//     <Navigate to="/login" replace />
//   );
// };

// export default PrivateRoute;
