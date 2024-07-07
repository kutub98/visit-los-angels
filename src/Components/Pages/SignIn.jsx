/* eslint-disable react/react-in-jsx-scope */
import { Card, Input, Checkbox, Button, Typography } from '@material-tailwind/react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export function SingUp() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/v1/auth/register', data);
      console.log(response.data);
      Swal.fire({
        title: 'Success!',
        text: 'Account created successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/');
      });
    } catch (error) {
      console.error('Error creating account:', error);
      Swal.fire({
        title: 'Error!',
        text: 'There was an error creating your account. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };
  return (
    <div className="w-full mx-auto p-10">
      <Card color="transparent" shadow={true} className=" max-w-screen-xl p-4 sm:w-96  mx-auto">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="Your Name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none'
              }}
              {...register('username', { required: 'Name is required' })}
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none'
              }}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none'
              }}
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>
          <Checkbox
            label={
              <Typography variant="small" color="gray" className="flex items-center font-normal">
                I agree to the
                <a href="#" className="font-medium transition-colors hover:text-gray-900">
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: '-ml-2.5' }}
            {...register('terms', { required: 'You must agree to the terms and conditions' })}
          />
          {errors.terms && <span className="text-red-500">{errors.terms.message}</span>}
          <Button className="mt-6" fullWidth type="submit">
            Create Account
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-gray-900">
              login here
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
