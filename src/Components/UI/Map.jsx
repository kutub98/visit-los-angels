/* eslint-disable react/prop-types */

import { FaMapMarkedAlt } from 'react-icons/fa';

const Map = ({ onClick }) => {
  return (
    <div className="w-full sticky top-24">
      <div className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13245.610694634516!2d-118.2468!3d34.0561!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b0f0b3fd75%3A0x69b2c8b707f02a00!2sGrand%20Park!5e0!3m2!1sen!2sus!4v1718539907896!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div
          className="absolute top-16 right-16 hover:bg-gray-900 hover:rounded-full hover:text-white transition z-50 cursor-pointer flex justify-center items-center text-center bg-white h-12 w-12 rounded-md shadow-md"
          onClick={onClick}
        >
          <FaMapMarkedAlt className="text-2xl " />
        </div>
      </div>
    </div>
  );
};

export default Map;
