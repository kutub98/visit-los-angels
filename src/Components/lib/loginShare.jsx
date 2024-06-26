/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { FaBookmark, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoCloseSharp, IoShareOutline } from 'react-icons/io5';
import { RiFlag2Line } from 'react-icons/ri';

const LoginShare = () => {
  const [shareSet, setShareSet] = useState(false);
  const [loginBox, setLoginBox] = useState(false);
  const [loginBox2, setLoginBox2] = useState(false);

  const handleLoginBox = () => {
    setLoginBox(true);
  };
  const handleLoginBox2 = () => {
    setLoginBox2(true);
  };

  const handleLoginBoxClose = (event) => {
    event.stopPropagation();
    setLoginBox(false);
    setLoginBox2(false);
  };

  const handleShareOption = () => {
    setShareSet(!shareSet);
  };

  return (
    <div className="flex justify-center items-start w-full bg-blue-gray-50">
      <div className="flex justify-between bg-blue-gray-50 p-5 items-center lg:w-4/5 mx-auto md:4/5 w-full">
        <div className=" lg:text-center text-start relative">
          <div
            className="flex lg:justify-center lg:text-center cursor-pointer items-center"
            onClick={handleShareOption}
          >
            <IoShareOutline className="h-6 w-6 mr-2 " />
            <p>Share</p>
          </div>
          {shareSet && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-md shadow-lg z-50">
              <div className="flex flex-col items-center">
                <FaFacebook className="h-8 w-8 my-2 cursor-pointer" />
                <FaLinkedin className="h-8 w-8 my-2 cursor-pointer" />
                <FaInstagram className="h-8 w-8 my-2 cursor-pointer" />
              </div>
            </div>
          )}
        </div>

        <div className=" lg:text-center text-end relative">
          <div
            className="flex lg:justify-center text-end lg:text-center items-center cursor-pointer"
            onClick={handleLoginBox2}
          >
            <RiFlag2Line className="h-6 w-6 mr-2" />
            <p>Been There</p>
          </div>
          {loginBox2 && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white px-4 py-3 rounded-sm shadow-lg z-50">
              <div className="flex justify-end cursor-pointer" onClick={handleLoginBoxClose}>
                <IoCloseSharp className="mb-2 h-6 w-6" />
              </div>
              <div className="flex justify-center z-50">
                <button className="px-4 py-2 font-semibold text-indigo-400 mx-2">Login</button>
                <button className="font-semibold text-white px-4 py-2 bg-indigo-400 mx-2">
                  Register
                </button>
              </div>
            </div>
          )}
        </div>
        <div className=" lg:text-center text-end relative">
          <div
            className="flex lg:justify-center text-end lg:text-center items-center cursor-pointer"
            onClick={handleLoginBox}
          >
            <FaBookmark className="h-6 w-6 mr-2" />
            <p>My next Trip</p>
          </div>
          {loginBox && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white px-4 py-3 rounded-sm shadow-lg z-50">
              <div className="flex justify-end cursor-pointer" onClick={handleLoginBoxClose}>
                <IoCloseSharp className="mb-2 h-6 w-6" />
              </div>
              <div className="flex justify-center z-50">
                <button className="px-4 py-2 font-semibold text-indigo-400 mx-2">Login</button>
                <button className="font-semibold text-white px-4 py-2 bg-indigo-400 mx-2">
                  Register
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginShare;
