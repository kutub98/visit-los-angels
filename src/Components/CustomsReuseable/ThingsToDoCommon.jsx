import { Carousel } from '@material-tailwind/react';
// import image1 from '../../assets/image/image (5).jpg';
import image1 from "../../assets/image/image (5).jpg"
import Featurs from '../UI/Featurs';
import VideoCard from '../UI/VidoeCarousal';
import image2 from '../../assets/image/perkspass_0.webp';
import UpCommingEvent from '../UI/UpcomingEvent';
import NewslaterUp from '../Pages/NewslaterUp';
import Newslatter from '../Pages/Newslatter';
const ThingsToDoCommon = () => {
  return (
    <div>
      <Carousel autoplay={true} loop={true}>
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
      </Carousel>
      {/* submenu list  */}
      <div className="w-full mx-auto bg-gray-700">
        <div className="lg:w-4/5 max-w-4/5 w-full mx-auto ">
          <div className="flex flex-col md:flex-row flex-wrap justify-center text-sm">
            <button className="hover:bg-white text-white text-sm hover:text-gray-800 px-5 py-6 uppercase active:bg-light-blue-800 active:text-white">
              Things to do
            </button>
            <button className="hover:bg-white text-white text-sm hover:text-gray-800 px-5 py-6 uppercase active:bg-light-blue-800 active:text-white">
              Attractions & Tours
            </button>
            <button className="hover:bg-white text-white text-sm hover:text-gray-800 px-5 py-6 uppercase active:bg-light-blue-800 active:text-white">
              arts & culture
            </button>
            <button className="hover:bg-white text-white text-sm hover:text-gray-800 px-5 py-6 uppercase active:bg-light-blue-800 active:text-white">
              outdoors & wellness
            </button>
            <button className="hover:bg-white text-white text-sm hover:text-gray-800 px-5 py-6 uppercase active:bg-light-blue-800 active:text-white">
              shopping
            </button>
            <button className="hover:bg-white text-white text-sm hover:text-gray-800 px-5 py-6 uppercase active:bg-light-blue-800 active:text-white">
              Bussines spotlight
            </button>
          </div>
        </div>
      </div>
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

      <Featurs />
      <VideoCard />

      <div>
        <div className="relative cursor-pointer h-[450px] ">
          <div className="w-full   relative h-[450px]  bg-yellow-500">
            <img
              src={image2}
              alt="Feature"
              className=" h-full w-full object-cover "
            />
          </div>

          {/* text box */}
          <div className="absolute inset-0 CustomBg"></div>
          <div className="absolute bottom-10 left-0 lg:w-1/3 w-full p-4 text-left">
            <h1 className="text-3xl text-white font-bold mt-4 hover:underline">
              LA PERKS PASS
            </h1>
            <h1 className="text-normal text-white tracking-wide mt-3">
              Experience the best of LA with unique dining, shopping, activity
              and entertainment offers.
            </h1>
            <button className=" bg-purple-400 text-white px-5 py-4 uppercase my-4">
              See Offer
            </button>
          </div>
        </div>
      </div>
      <UpCommingEvent />

      <NewslaterUp />
      <Newslatter />
    </div>
  );
};

export default ThingsToDoCommon;
