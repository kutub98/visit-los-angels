/* eslint-disable react/react-in-jsx-scope */
import { Carousel } from '@material-tailwind/react';

import image1 from '../../assets/image/visitOne.webp';
import image2 from '../../assets/image/visit2.webp';
import image3 from '../../assets/image/visit3.webp';
import { FindItinerary } from '../CustomsReuseable/FindItinerary';
import FeatursTwo from '../UI/FeatursTwo';
import UpCommingEvent from '../UI/UpcomingEvent';
import AboutTown from '../UI/AboutTown';
import FindPlace from '../UI/FindPlace';
import NewslaterUp from './NewslaterUp';
import Newslatter from './Newslatter';
const Visit = () => {
    const today = new Date();
    const options = {year: 'numeric', month: "long", day: "numeric"}
    const formattedDate = today.toLocaleString('en-US', options)
    return (
    <div>
      <Carousel >
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
               3 days arts cultures in la
              </h1>
              <h1 className="lg:text-2xl text-lg lg:mt-6 mt-4 text-white flex">
               {formattedDate}
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
        <div className="grid grid-cols-12">
          <div className="lg:col-span-5 col-span-12 lg:order-first order-last flex flex-col justify-center bg-gradient-to-b from-[#ff7676] via-[#ab67aa] to-[#1cacb1] w-full lg:px-10 p-12">
            <div className="lg:flex items-start">
              <button className="bg-black text-white px-4 py-1 tracking-widest hover:underline">
                LA GUIDES
              </button>
              <button className="text-white px-4 py-1 tracking-widest hover:underline">
               CELEBRATE BLACK LA
              </button>
            </div>

            <div className="text-left">
              <h1 className="lg:text-5xl text-xl font-semibold lg:mt-6 mt-4 text-white">
                THE GUIDE TO BLACK OWNED BUSINESSES IN LA
              </h1>
              <h1 className="lg:text-2xl text-lg lg:mt-6 mt-4 text-white flex">
               {formattedDate}
              </h1>
              
            </div>
          </div>

          <div className="lg:col-span-7 col-span-12">
            <img
              src={image2}
              alt="Guide to Los Angeles Park"
              className="w-full"
            />
          </div>
        </div>
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
             
              <h1 className="lg:text-2xl text-lg lg:mt-6 mt-4 text-white flex">
               {formattedDate}
             
              
              </h1>
              
            </div>
          </div>

          <div className="lg:col-span-7 col-span-12">
            <img
              src={image3}
              alt="Guide to Los Angeles Park"
              className="w-full"
            />
          </div>
        </div>
        
      </Carousel>
      
      {/* searchbar  */}
      <div className="w-full mx-auto bg-gray-300 lg:p-10 md:p-7 p-4">
        <div className="grid grid-cols-12 gap-1 w-full max-w-2xl  justify-center mx-auto items-center ">
          {/* seletct option */}
          <div className="lg:col-span-11 md:col-span-11 col-span-12  ">
            <select
              name=""
              id=""
              className="w-full bg-gray-50 px-2 py-4 rounded"
            >
              <option value="">--Categories (All)</option>
              <option value="">--Categories (All)</option>
              <option value="">--Categories (All)</option>
              <option value="">--Categories (All)</option>
              <option value="">--Categories (All)</option>
              <option value="">--Categories (All)</option>
              <option value="">--Categories (All)</option>
              <option value="">--Categories (All)</option>
              <option value="">--Categories (All)</option>
              <option value="">--Categories (All)</option>
              <option value="">--Categories (All)</option>
              <option value="">--Categories (All)</option>
              <option value="">--Categories (All)</option>
            </select>
          </div>
          {/* search button */}
          <div className="lg:col-span-1 md:col-span-1 col-span-12 mx-auto justify-center bg-yellow-500 ">
            <button className=" bg-deep-purple-500 text-white uppercase p-5">
              Go
            </button>
          </div>
        </div>
      </div>
      {/* text  */}
      <div className="w-full mx-auto bg-gray-50 lg:p-10 md:p-7 p-4">
        <div className=" w-full max-w-2xl  justify-center mx-auto items-center ">
          <h1 className=" tracking-wide text-justify">
            <span className=" font-semibold text-lg ">
              {' '}
              <a href="" className=" text-deep-purple-500">
                {' '}
                Los Angeles
              </a>{' '}
              attractions and tours offer something for the entire family
            </span>
            , from state-of-the-art rides to walks through historic
            neighborhoods. Theme parks feature incredible thrills, while famous
            cultural attractions include the Getty Center, LACMA and Walt Disney
            Hall. Take flight with the Space Shuttle Endeavour, or time travel
            via Dinosaur Hall. Tour LA’s world famous studios, explore LA by bus
            with Starline Tours and the infamous TMZ Tour, or get some exercise
            with Bikes and Hikes. There are plenty of things to do and see
            throughout the city of LA, whether you are a solo visitor or here
            with a group. Discover all the best tourist attractions in Los
            Angeles, California!
          </h1>
        </div>
      </div>
      {/* FIND YOUR PERFECT ITINERARY */}
      <div className=' ITINERARY lg:px-20 lg:py-8'>
        <div className='w-full  mx-auto'>
        <h1 className='lg:text-4xl font-semibold lg:my-10 my-6 text-2xl text-white'>FIND YOUR PERFECT ITINERARY</h1>
        <div>
          <FindItinerary/>
        </div>
<<<<<<< HEAD
        
=======
        <FeatursTwo />
      <UpCommingEvent />
      <AboutTown />
      <FindPlace />
      <NewslaterUp />
      <Newslatter />
>>>>>>> 6f47b3bceb622ef3d5d7ab934b947ef2fb1c152b
        </div>
       
      </div>
      <FeatursTwo />
      <UpCommingEvent />
      <AboutTown />
      <FindPlace />
      <NewslaterUp />
      <Newslatter />
    </div>
    );
};

export default Visit;