/* eslint-disable react/no-unescaped-entities */
import { Carousel, IconButton } from "@material-tailwind/react";
import img1 from "../../assets/image/Hero-1.webp";
import img2 from "../../assets/image/hero-2.webp";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
const Section1 = () => {
  return (
    <div>
      {/* <Carousel className="rounded-xl">
        <div>
          <img
            src={img1}
            alt="image 1"
            className="h-[500px] w-full object-cover"
          />
          <button className="bg-[#783a9c] px-7 py-3 text-white relative bottom-16 left-7">
            Find Event
          </button>
        </div>

        <div>
          <img
            src={img2}
            alt="image 2"
            className="h-[500px] w-full object-cover"
          />
          <div className="relative bottom-44 left-7 opacity-100">
            <h2 className="text-4xl font-bold text-white">IT'S SPRING IN LA</h2>
            <p className="text-white">
              Find your favorite part for a picnic,a bike ride,a <br />{" "}
              concert,a movie,or just a zen moment. SO <br /> many park,so much
              fun!
            </p>
            <button className="bg-[#783a9c] px-7 py-3 text-white ">
              Read More
            </button>
          </div>
        </div>
      </Carousel> */}

      <Carousel
        className="rounded-xl"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-[30%] left-4 -translate-y-2/4  w-14 h-14 rounded-full"
          >
            <MdArrowBackIos className="text-4xl text-white " />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-[30%] !right-4 -translate-y-2/4  w-14 h-14 rounded-full"
          >
            <MdArrowForwardIos className="text-4xl text-white " />
          </IconButton>
        )}
      >
 <div>
          <img
            src={img1}
            alt="image 1"
            className="h-[500px] w-full object-cover"
          />
          <button className="bg-[#783a9c] px-7 py-3 text-white relative bottom-16 left-7">
            Find Event
          </button>
        </div>

        <div>
          <img
            src={img2}
            alt="image 2"
            className="h-[500px] w-full object-cover"
          />
          <div className="relative bottom-48 left-7 opacity-100">
            <h2 className="text-4xl font-bold text-white">IT'S SPRING IN LA</h2>
            <p className="text-white mt-2">
              Find your favorite part for a picnic,a bike ride,a <br />{" "}
              concert,a movie,or just a zen moment. SO <br /> many park,so much
              fun!
            </p>
            <button className="bg-[#783a9c] px-7 mt-2 py-3 text-white ">
              Read More
            </button>
          </div>
        </div>
  
      </Carousel>
    </div>
  );
};

export default Section1;
