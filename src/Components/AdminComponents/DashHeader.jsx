/* eslint-disable react/react-in-jsx-scope */
import { Navbar, Typography, Button, Input, Avatar } from '@material-tailwind/react';
import useAuthUser from '../auth/getUser';
import { auth } from '../../../firebase.config';
import { signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export function DashHeader() {
  const { user } = useAuthUser(auth);
  const navigate = useNavigate();
  console.log(user);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Swal.fire({
        icon: 'success',
        title: 'Signed out successfully',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        navigate('/');
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error signing out',
        text: error.message
      });
    }
  };

  return (
    <>
      <Navbar className="mx-auto max-w-screen-2xl bg-[#1cacb1] text-white px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-y-4 ">
          <Typography as="a" href="#" variant="h6" className="mr-4 ml-2 cursor-pointer py-1.5">
            Visit Los Angeles dashboard
          </Typography>

          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="white"
              label="Type here..."
              className="pr-20"
              containerProps={{
                className: 'min-w-[288px]'
              }}
            />
            <Button size="sm" color="white" className="!absolute right-1 top-1 rounded">
              Search
            </Button>
          </div>
          <div className="flex">
            <Button onClick={handleLogout} className="mr-2">
              Logout
            </Button>
            <Avatar src={user?.img} alt="avatar" />
          </div>
        </div>
      </Navbar>
    </>
  );
}
