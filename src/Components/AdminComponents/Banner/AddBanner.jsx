/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
import { Button, Dialog, DialogBody, Input } from '@material-tailwind/react';
import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const AddBanner = () => {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const handleOpen = () => setOpen((cur) => !cur);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, for example, send images to server or process further
    console.log('Submitted images:', images);
    // Reset state after submission if needed
    setImages([]);
    setPreviewImages([]);
    setOpen(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-5">
      <div className=" bg-white shadow-xl p-5 rounded relative">
        <div className=" sticky top-20 w-full  flex justify-between">
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
                      className="absolute top-0 right-0 h-6 w-6 text-center flex justify-center items-center rounded-full bg-red-500 text-white rounded-full"
                      onClick={() => handleDeleteImage(index)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex w-full text-center items-center  justify-end">
                <button
                  type="submit"
                  className="bg-[#1cacb1] w-56 items-center my-auto text-white px-4 py-2 mt-4 rounded justify-end"
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

export default AddBanner;
