/* eslint-disable react/react-in-jsx-scope */
import { Card, Input, Checkbox, Typography, Button } from '@material-tailwind/react';
import axios from 'axios';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CiImageOn } from 'react-icons/ci';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth } from '../../../firebase.config';

const SignUp = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const handleDeleteImage = () => {
    setPreviewImage(null);
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const {email,password} = data;
    try {
      const formData = new FormData();
      formData.append('image', imageFile);
      const imgbbResponse = await axios.post(
        'https://api.imgbb.com/1/upload?key=f38e45febf287b0c4bc835d28ec2cb8c',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      const img = imgbbResponse.data.data.url;
      const userDetails = { ...data, img };

      console.log(userDetails);

      const response = await axios.post('http://localhost:5000/api/v1/auth/register', userDetails);
      console.log('Response:', response.data);
      
      await createUserWithEmailAndPassword(auth, email, password);

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
    <div className="w-full mx-auto">
      <Card color="transparent" shadow={true} className="w-full max-w-5xl lg:p-10 p-6 mx-auto">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="grid grid-cols-12 gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:col-span-6 col-span-12 md:col-span-6">
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              label="Your Name"
              className=""
              {...register('username', { required: 'Name is required' })}
            />
            {errors.username && <span className="text-red-500">{errors.username.message}</span>}
          </div>
          <div className="col-span-12 lg:col-span-6 md:col-span-6 row-span-4 lg:order-none  md:order-none order-first">
            {previewImage ? (
              <div className="col-span-12 lg:col-span-6 md:col-span-6 flex justify-center items-center">
                <div className="relative">
                  <img
                    src={previewImage}
                    alt="preview"
                    className="w-32 h-32 object-cover rounded-full"
                  />
                  <button
                    type="button"
                    className="absolute top-0 right-0 h-6 w-6 text-center flex justify-center items-center rounded-full bg-red-500 text-white"
                    onClick={handleDeleteImage}>
                    X
                  </button>
                </div>
              </div>
            ) : (
              <div className="w-full shadow-inner">
                <CiImageOn className="w-full h-48 object-cover rounded-full" />
              </div>
            )}
            <div className="col-span-12 lg:col-span-6 md:col-span-6 flex justify-center items-center">
              <label className="cursor-pointer shadow-md border items-center w-full px-3 py-2 rounded-full flex justify-center text-center">
                <FaCloudUploadAlt className="mr-2" />
                Upload Profile Image
                <input
                  type="file"
                  {...register('image')}
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 md:col-span-6">
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              label="Your Email"
              className=""
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div className="col-span-12 lg:col-span-6 md:col-span-6">
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              label="Password"
              className=""
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}

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
          </div>
          <div className="col-span-12 justify-center flex p-0">
            <div className="lg:w-1/2 w-full justify-center">
              <Button className="mt-6" fullWidth type="submit">
                Create Account
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{' '}
                <a href="/login" className="font-medium text-gray-900">
                  Login here
                </a>
              </Typography>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;