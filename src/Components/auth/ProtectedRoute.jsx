/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Navigate } from 'react-router-dom';
import useAuthUser from './getUser';
import { auth } from '../../../firebase.config';

const ProtectedRoute = ({ element, allowedRoles }) => {
  const { user } = useAuthUser(auth); 
console.log(user);
  if (!user.user) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;
