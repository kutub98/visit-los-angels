/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
import { Button, Dialog, DialogBody, Input } from '@material-tailwind/react';
import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { CiImageOn } from 'react-icons/ci';

const CreateEvents = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

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

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <div className="w-full max-w-6xl mx-auto p-5">
      <div className="bg-white shadow-xl p-5 rounded relative">
        <div className="sticky top-20 w-full flex justify-between">
          <Button className="bg-[#1cacb1]">Total Events</Button>

          <div className="flex gap-3">
            <Button onClick={handleOpen} className="bg-[#1cacb1]">
              Add Event
            </Button>
          </div>
        </div>

        <Dialog open={open} size="lg" handler={handleOpen}>
          <div className="text-center justify-center items-center my-4">
            <h1 className="font-semibold text-2xl">Add an Event</h1>
          </div>
          <DialogBody className="overflow-y-scroll max-h-[90vh] w-full p-5">
            <form
              className="mt-8 mb-2 grid grid-cols-12 gap-6 row-span-full"
              onSubmit={handleSubmit}
            >
              <div className="col-span-12 lg:col-span-6">
                <Input label="Event Title" />
              </div>
              <div className="col-span-12 lg:col-span-6 row-span-3 ">
                {previewImage ? (
                  <div className="col-span-12 lg:col-span-6 flex justify-center items-center">
                    <div className="relative">
                      <img
                        src={previewImage}
                        alt="preview"
                        className=" w-32 h-32 object-cover rounded"
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
                ) : (
                  <div className=" w-full shadow-inner">
                    <CiImageOn className="w-full h-48 object-cover rounded" />
                  </div>
                )}
                <div className="col-span-12 lg:col-span-6 flex justify-center items-center">
                  <label className="cursor-pointer shadow-md border items-center w-full px-3 py-2 rounded-full flex justify-center text-center">
                    <FaCloudUploadAlt className="mr-2" />
                    Upload Event Image
                    <input type="file" onChange={handleFileChange} className="hidden" />
                  </label>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-6">
                <Input label="Event Short Description" />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <Input label="Date and Time" />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <Input label="Location Link" />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <Input label="Event Link" />
              </div>

              {/* Submit button */}
              <div className="col-span-12 flex justify-end mt-6">
                <button type="submit" className="bg-[#1cacb1] text-white px-4 py-2 rounded">
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

export default CreateEvents;
