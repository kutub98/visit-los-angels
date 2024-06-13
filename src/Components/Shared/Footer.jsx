/* eslint-disable react/no-unknown-property */
// import { Typography } from "@material-tailwind/react";
import img from "../../assets/image/image (1).png";
import img1 from "../../assets/image/image (3).png";
import img2 from "../../assets/image/image (5).png";
import img3 from "../../assets/image/image (2).png";
import img4 from "../../assets/image/image (4).png";
import google from "../../assets/image/image.webp";
import app from "../../assets/image/image (1).webp";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="prcolor border text-blue-gray-100 relative w-full p-2 pt-10 pb-10">
      <div className=" mx-auto flex justify-center gap-4">
        <div className="lg:flex gap-4">
          <h2 className="font-bold">Thing to do</h2>
          <h2 className="font-bold">FInd event</h2>
          <h2 className="font-bold">Tourist Info</h2>
          <h2 className="font-bold">About LA Tourism</h2>
        </div>
        <div className="lg:flex gap-4">
          <h2 className="font-bold">Eat & Drinks</h2>
          <h2 className="font-bold">Where to stay</h2>
          <h2 className="font-bold">Meeting</h2>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center ">PARTNERS</h2>
        <div className="flex justify-center gap-4  mx-auto mt-5">
          <div className="lg:flex gap-4">
            <div>
              <img src={img} alt="" />
            </div>
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="lg:flex gap-4">
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
      </div>

      <div className="mt-10 w-[40%] mx-auto">
        <h2 className="text-3xl font-bold text-center">FOLLOW US</h2>
        <div>
          <div className="flex gap-5 justify-between mt-5">
            <p>
              <FaFacebook className="text-xl" />
            </p>
            <p>
              <FaTwitter className="text-xl" />
            </p>
            <p>
              <FaInstagram className="text-xl" />
            </p>
            <p>
              <AiFillTikTok className="text-xl" />
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10  mx-auto flex gap-4 justify-center">
        <img src={google} className="w-40" alt="" />
        <img src={app} className="w-40" alt="" />
      </div>

      <div className="mt-10 text-center text-sm ">

        <div className="max-md-hidden w-[60%] mx-auto flex justify-between gap-4">
          <h2>PRIVECY POLICY </h2>

          <h2>PRIVECY SETTING</h2>

          <h2>COOKIE PREFERENCES</h2>

          <h2>ADVERTISE</h2>

          <h2>ACCESIBLITY</h2>
        </div>

        <div className="md:hidden w-[90%] mx-auto ">
          <div className="flex justify-between gap-4">
            <h2>PRIVECY POLICY </h2>

            <h2>PRIVECY SETTING</h2>

            <h2>COOKIE PREFERENCES</h2>
          </div>

          <div className=" grid grid-cols-2 mx-auto mt-2">
            <h2>ADVERTISE</h2>

            <h2>ACCESIBLITY</h2>
          </div>
        </div>

        <div className="mt-5">
          <h1>
            The official guide to Los Angeles. Find great deals, things to do,
            California travel guides and more.
          </h1>
          <p>
            © {currentYear} Los Angeles Tourism & Convention Board. All rights
            reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
