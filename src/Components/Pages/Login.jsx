/* eslint-disable react/react-in-jsx-scope */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button
} from '@material-tailwind/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate  = useNavigate( )
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/v1/auth/login', data);
      console.log(response.data);
      Swal.fire({
        title: 'Success!',
        text: 'Account created successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/');
      });
      // Handle successful login here (e.g., store the token, redirect user)
    } catch (error) {
      console.error('Error logging in:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Invalid email or password. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="w-full mx-auto p-10">
      <Card className="w-96 mx-auto">
        <CardHeader className="mb-4 grid h-28 place-items-center bg-gradient-to-b from-[#ff9876] via-[#ab67aa] to-[#1cacb1]">
          <Typography variant="h3" color="white">
            Login to Los Angels
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email"
              className="p-2"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            <Input
              label="Password"
              className="p-2"
              type="password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" {...register('rememberMe')} />
            </div>
            <Button
              type="submit"
              variant="gradient"
              className="bg-gradient-to-b from-[#ab67aa] to-[#1cacb1]"
              fullWidth>
              Login
            </Button>
          </form>
        </CardBody>
        <CardFooter className="pt-0">
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="/signUp"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold border-b">
              Create Account
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
