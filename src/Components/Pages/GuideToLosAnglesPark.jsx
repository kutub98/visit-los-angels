import image1 from '../../assets/image/guidPageImg1.webp';
import { IoShareOutline } from 'react-icons/io5';
import {
  FaBookmark,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { useState } from 'react';
import MapContent from '../UI/MapContent';
import Map from '../UI/Map';
import NewslaterUp from './NewslaterUp';
import Newslatter from './Newslatter';

const GuideToLosAnglesPark = () => {
  const [shareSet, setShareSet] = useState(false);
  const [loginBox, setloginBox] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(true);

  const handleSpanClass = () => {
    setIsMapVisible(!isMapVisible);
  };
  const handleLoginBox = () => {
    setloginBox(true);
  };
  const handleLoginBoxClose = event => {
    event.stopPropagation();
    setloginBox(false);
  };

  const handleShareOption = () => {
    setShareSet(!shareSet);
  };

  return (
    <>
      {/* top image and text part start */}
      <div className="grid grid-cols-12">
        <div className="lg:col-span-5 col-span-12 lg:order-first order-last flex flex-col justify-center bg-gradient-to-b from-[#ff7676] via-[#ab67aa] to-[#1cacb1] w-full lg:px-10 p-12">
          <div className="lg:flex items-start">
            <button className="bg-black text-white px-4 py-1 tracking-widest hover:underline">
              THINGS TO DO
            </button>
            <button className="text-white px-4 py-1 tracking-widest hover:underline">
              ATTRACTIONS & TOURS
            </button>
          </div>

          <div className="text-left">
            <h1 className="lg:text-5xl text-xl font-semibold lg:mt-6 mt-4 text-white">
              THE GUIDE TO LOS ANGELES PARKS
            </h1>
            <h1 className="lg:text-2xl text-lg lg:mt-6 mt-4 text-white">
              Enjoy the L.A. weather at parks from Downtown L.A. to the coast
            </h1>
            <h1 className="mt-3">
              by
              <span className="lg:text-2xl text-lg lg:mt-6 mt-4 text-white">
                {' '}
                Discover by Los Angeles
              </span>
            </h1>
          </div>
        </div>

        <div className="lg:col-span-7 col-span-12">
          <img
            src={image1}
            alt="Guide to Los Angeles Park"
            className="w-full"
          />
        </div>
      </div>
      {/* top image and text part end */}

      {/* second part share save section start */}
      <div className="grid grid-cols-12 bg-blue-gray-50 p-5">
        <div className="col-span-6 lg:text-center text-start relative">
          <div
            className="flex px-10 lg:justify-center lg:text-center cursor-pointer items-center"
            onClick={handleShareOption}
          >
            <IoShareOutline className="h-6 w-6 mr-2 " />
            <p>Share</p>
          </div>
          {shareSet && (
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 block my-1 bg-white p-2 rounded-md shadow-lg">
              <FaFacebook className="h-8 w-8 my-2" />
              <FaLinkedin className="h-8 w-8 my-2" />
              <FaInstagram className="h-8 w-8 my-2" />
            </div>
          )}
        </div>
        <div className="col-span-6 lg:text-center text-end relative">
          <div
            className="flex px-10 lg:justify-center text-end lg:text-center items-center cursor-pointer"
            onClick={handleLoginBox}
          >
            <FaBookmark className="h-6 w-6 mr-2" />
            <p>My next Trip</p>
            {loginBox && (
              <div className="absolute bg-white left-1/2 transform -translate-x-1/2 -translate-y-1/2 my-1 px-4 py-3 rounded-sm shadow-lg">
                <div
                  className="flex justify-end cursor-pointer"
                  onClick={handleLoginBoxClose}
                >
                  <IoCloseSharp className="mb-2 h-6 w-6" />
                </div>
                <div className="flex">
                  <button className="px-4 py-2 font-semibold text-indigo-400 mx-2">
                    Login
                  </button>
                  <button className="font-semibold text-white px-4 py-2 bg-indigo-400 mx-2">
                    Register
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* second part share save section end */}

      {/* 3rd part contents and map section start */}
      <div className="w-full relative grid grid-cols-12 py-10">
        <div
          className={`lg:order-first order-last bg-white mx-auto w-full ${
            isMapVisible ? 'lg:col-span-4 col-span-12' : ' col-span-12 '
          }`}
        >
          <MapContent
            className={`${
              isMapVisible
                ? 'w-full mx-auto'
                : 'lg:w-2/3 md:w-2/3 w-full mx-auto '
            }`}
          />
        </div>
        {isMapVisible && (
          <div className="relative lg:col-span-8 col-span-12">
            <Map onClick={handleSpanClass} />
          </div>
        )}
        {!isMapVisible && (
          <div
            className="absolute -top-2 hover:bg-gray-900 hover:text-white transition rounded-full right-16 cursor-pointer flex justify-center items-center text-center bg-white h-12 w-12 shadow-md"
            onClick={handleSpanClass}
          >
            <FaMapMarkedAlt className="text-2xl" />
          </div>
        )}
      </div>
      {/* 3rd part contents and map section end */}
      <NewslaterUp />
      <Newslatter />
    </>
  );
};

export default GuideToLosAnglesPark;
