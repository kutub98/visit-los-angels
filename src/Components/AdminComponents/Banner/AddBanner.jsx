/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
import { Button, Dialog, DialogBody } from '@material-tailwind/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaCloudUploadAlt } from 'react-icons/fa';

const AddBanner = () => {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [sliderImages, setSliderImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  const fetchSliderImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://visitlos-server.vercel.app/api/v1/slider');
      setSliderImages(response.data);
    } catch (error) {
      console.error('Error fetching slider images:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSliderImages();
  }, []);

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files) {
      const imagesArray = Array.from(files).map((file) => URL.createObjectURL(file));
      setPreviewImages((prev) => [...prev, ...imagesArray]);
      setImages((prev) => [...prev, ...files]);
    }
  };

  const handleDeleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);

    const newPreviewImages = [...previewImages];
    newPreviewImages.splice(index, 1);
    setPreviewImages(newPreviewImages);
  };

  const handleDeleteSliderImage = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`https://visitlos-server.vercel.app/api/v1/slider/${id}`);
          fetchSliderImages();
          Swal.fire({
            title: "Deleted!",
            text: "Your slider image has been deleted.",
            icon: "success"
          });
        } catch (error) {
          console.error('Error deleting slider image:', error);
          Swal.fire('Error', 'Error deleting slider image', 'error');
        }
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    images.forEach((image) => {
      formData.append('sliderImages', image);
    });

    try {
      await axios.post('https://visitlos-server.vercel.app/api/v1/slider', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      Swal.fire('Success', 'Slider images added successfully', 'success');
      fetchSliderImages();
      handleClose();
    } catch (error) {
      Swal.fire('Error', 'Error adding slider images', 'error');
      console.error('Error adding slider images:', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setImages([]);
    setPreviewImages([]);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-5">
      <div className="bg-white shadow-xl p-5 rounded relative">
        <div className="sticky top-20 w-full flex justify-between">
          <Button className="bg-[#1cacb1]">Total Slider</Button>

          <div className="flex gap-3">
            <Button onClick={handleOpen} className="bg-[#1cacb1]">
              Add Slider Image
            </Button>
          </div>
        </div>

        <Dialog open={open} size="lg" handler={handleOpen}>
          <DialogBody className="overflow-y-scroll max-h-[90vh] w-full p-10">
            <form className="mt-8 mb-2" onSubmit={handleSubmit}>
              <div className="w-full my-4">
                <label className="cursor-pointer shadow-md border items-center px-3 py-2 rounded-full flex justify-center text-center">
                  <FaCloudUploadAlt className="mr-2" />
                  Upload Slider Image
                  <input type="file" multiple onChange={handleFileChange} className="hidden" />
                </label>
              </div>
              <div className="flex flex-wrap gap-3 mt-7 w-full">
                {previewImages.map((previewUrl, index) => (
                  <div key={index} className="relative">
                    <img
                      src={previewUrl}
                      alt={`preview-${index}`}
                      className="w-32 h-32 object-cover rounded"
                    />
                    <button
                      type="button"
                      className="absolute top-0 right-0 h-6 w-6 text-center flex justify-center items-center bg-red-500 text-white rounded-full"
                      onClick={() => handleDeleteImage(index)}>
                      X
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex w-full text-center items-center justify-end">
                <button
                  type="submit"
                  className="bg-[#1cacb1] w-56 items-center my-auto text-white px-4 py-2 mt-4 rounded justify-end">
                  Submit
                </button>
              </div>
            </form>
          </DialogBody>
        </Dialog>
      </div>

      {loading ? (
        <div className="flex justify-center mt-10">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        sliderImages.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mt-10">All Slider Images</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
              {sliderImages.map((image) => (
                <div key={image._id} className="relative">
                  <img
                    src={image.slider_image}
                    alt={`slider-${image._id}`}
                    className="w-32 h-32 object-cover rounded"
                  />
                  <button
                    type="button"
                    className="absolute top-0 right-0 h-6 w-6 text-center flex justify-center items-center bg-red-500 text-white rounded-full"
                    onClick={() => handleDeleteSliderImage(image._id)}>
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default AddBanner;
