/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
import { Button, Dialog, DialogBody, Input } from '@material-tailwind/react';
import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const AdvertiseImg = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleOpen = () => setOpen((cur) => !cur);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setImage(file);
    }
  };

  const handleDeleteImage = () => {
    setPreviewImage(null);
    setImage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, for example, send image to server or process further
    console.log('Submitted image:', image);
    // Reset state after submission if needed
    setPreviewImage(null);
    setImage(null);
    setOpen(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-5">
      <div className="bg-white shadow-xl p-5 rounded relative">
        <div className="sticky top-20 w-full flex justify-between">
          <Button className="bg-[#1cacb1]">Total Advertisement</Button>

          <div className="flex gap-3">
            <Button onClick={handleOpen} className="bg-[#1cacb1]">
              Add Advertisement Image
            </Button>
          </div>
        </div>

        <Dialog open={open} size="lg" handler={handleOpen}>
          <div className="text-center justify-center items-center my-4">
            <h1 className="font-semibold text-2xl">Add advertisement image</h1>
          </div>
          <DialogBody className="overflow-y-scroll max-h-[90vh] w-full p-10">
            <form className="mt-8 mb-2" onSubmit={handleSubmit}>
              <div className="w-full my-4">
                <label className="cursor-pointer shadow-md border items-center px-3 py-2 rounded-full flex justify-center text-center">
                  <FaCloudUploadAlt className="mr-2" />
                  Upload Advertisement Image
                  <input type="file" onChange={handleFileChange} className="hidden" />
                </label>
              </div>
              {previewImage && (
                <div className="flex justify-center mt-7">
                  <div className="relative">
                    <img
                      src={previewImage}
                      alt="preview"
                      className="w-32 h-32 object-cover rounded"
                    />
                    <button
                      type="button"
                      className="absolute top-0 right-0 h-6 w-6 text-center flex justify-center items-center rounded-full bg-red-500 text-white rounded-full"
                      onClick={handleDeleteImage}
                    >
                      X
                    </button>
                  </div>
                </div>
              )}
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-[#1cacb1] text-white px-4 py-2 rounded cursor-pointer"
                  disabled={!previewImage}
                >
                  Submit
                </button>
              </div>
            </form>
          </DialogBody>
        </Dialog>
      </div>
    </div>
  );
};

export default AdvertiseImg;
