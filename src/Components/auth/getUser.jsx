import { useState, useEffect } from 'react';
import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
// import { AuthContext } from "./AuthProvider";

const useAuthUser = (auth) => {
  const [user, setUser] = useState(null);
  const [get, getUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(get);
  //   const { user: firebaseUser } = useContext(AuthContext);
  // const { user } = useContext(AuthContext);
  useEffect(() => {
    const uns = onAuthStateChanged(auth, (currentUser) => {
      getUser(currentUser);
      setLoading(false);
    });
    return () => {
      return uns;
    };
  }, []);
  useEffect(() => {
    const loader = async () => {
      const response = await axios.get(`https://visitlos-server.vercel.app/api/v1/users/email/${get?.email}`);
      if (response?.data) {
        setUser(response?.data);
        setLoading(false);
      }
    };

    if (get) {
      loader();
    }
  }, [get]);

  return { user, loading };
};

export default useAuthUser;
