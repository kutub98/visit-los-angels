/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
import { Button, Dialog, DialogBody, Input, Textarea } from '@material-tailwind/react';
import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const Quota = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleSubmit = (e) => {
    e.default();
  };
  return (
    <div className="w-full max-w-6xl mx-auto p-5">
      <div className=" bg-white shadow-xl p-5 rounded relative">
        <div className=" sticky top-20 w-full  flex justify-between">
          <Button className="bg-[#1cacb1]">Total Quota</Button>

          <div className="flex gap-3">
            <Button onClick={handleOpen} className="bg-[#1cacb1]">
              Add Quota
            </Button>
          </div>
        </div>
        <Dialog open={open} size="lg" handler={handleOpen}>
          <div className="text-center justify-center items-center my-4">
            <h1 className="font-semibold text-2xl">Add a Quota </h1>
          </div>
          <DialogBody className="overflow-y-scroll max-h-[90vh] w-full p-5">
            <form className="mt-8 mb-2" onSubmit={handleSubmit}>
              <div className="w-full">
                <Textarea label="Write your Quota here..." />
                <Input label="Writer Name " />
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

export default Quota;
