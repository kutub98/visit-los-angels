import React, { useState } from 'react';
import { MobileNav, IconButton, Button } from '@material-tailwind/react';
import { TiThMenu } from 'react-icons/ti';
import img1 from '../../assets/image/dla_logo_gradient.svg';
import img2 from '../../assets/image/GreekTheatre.webp';
import { FaChevronLeft, FaFacebook, FaInstagram, FaPlus, FaTwitter } from 'react-icons/fa';
import { AiFillTikTok } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  const [openNav, setOpenNav] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [email, setEmail] = React.useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const onChange = ({ target }) => setEmail(target.value);

  const toggleSearch = () => {
    setSearchVisible((prev) => !prev);
  };

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const handleCategoryClick = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  const handleBackClick = () => {
    setActiveCategory(null);
  };

  return (
    <div>
      <main className=" relative  z-[999] w-full ">
        <div className="bg-[#333333] fixed z-40 w-full px-5">
          <div className=" flex justify-between items-center">
            <div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}>
                <TiThMenu className="text-white text-4xl" />
              </IconButton>
            </div>

            <div>
              <Link to="/home">
                <img src={img1} className=" w-20 h-20 md:w-36  " alt="Logo" />
              </Link>
            </div>

            <div className="md:flex gap-5 items-center">
              <div>
                <button onClick={toggleSearch}>
                  <IoIosSearch className="text-4xl text-white md:hidden" />
                </button>
              </div>

              {searchVisible && (
                <div className="max-md-hidden relative flex w-full gap-2 md:w-max">
                  <div className="relative flex w-full max-w-[24rem]">
                    <input
                      type="email"
                      value={email}
                      onChange={onChange}
                      className="pr-20 px-2 py-3 text-black bg-white"
                      placeholder="Search"
                    />
                    <button size="md" className="px-5 py-2   bg-[#893a9c]">
                      Go
                    </button>
                  </div>
                </div>
              )}

              <div className="max-md-hidden">
                <button onClick={toggleSearch}>
                  <IoIosSearch className="text-4xl text-white" />
                </button>
              </div>
            </div>
          </div>
          <div className="md:hidden w-full ">
            {searchVisible && (
              <div className=" relative  flex justify-end  mx-auto gap-2  pb-2">
                <div className=" flex relative mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={onChange}
                    className="pr-20 px-5 py-1 w-[200px] text-black bg-white"
                    placeholder="Search"
                  />
                  <button size="md" className="px-5 py-2  bg-[#893a9c]">
                    GO
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <MobileNav
          open={openNav}
          className={`fixed top-0 left-0 w-full h-screen inset-0 z-50 bg-gradient-to-b from-[#ff9876] via-[#ab67aa] to-[#1cacb1] ${
            openNav ? 'translate-x-0 ' : '-translate-x-full  '
          }  duration-500`}>
          <div className=" absolute h-screen overflow-scroll w-full customScrollBar">
            <button
              onClick={() => setOpenNav(false)}
              className="absolute top-6 left-6 text-lg font-bold">
              <RxCross1 className="text-3xl text-white" />
            </button>

            <div className="px-5 py-20 left-5 grid md:grid-cols-2 gap-7">
              <div className="pl-8 flex flex-col justify-start menuWithSubCategory">
                {/* Main Categories */}
                {activeCategory ? (
                  ''
                ) : (
                  <div
                    className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2 cursor-pointer"
                    onClick={() => handleCategoryClick('thingstodo')}>
                    Things to do
                    <h2>
                      <FaPlus className="text-[16px]" />
                    </h2>
                  </div>
                )}
                {activeCategory === 'thingstodo' && (
                  <div className=" transition-all duration-500">
                    <div
                      className={`flex flex-col gap-3 ${activeCategory ? ' origin-left transition duration-500 left-0' : 'origin-right left-24 transition duration-500'}`}>
                      <span
                        className="flex items-center duration-500 transition"
                        onClick={handleBackClick}>
                        {' '}
                        <Button className="flex  text-xl hover:shadow-transparent items-center bg-none bg-transparent shadow-transparent text-white">
                          <FaChevronLeft className="mr-2" /> Back
                        </Button>
                      </span>
                      <Link
                        onClick={() => setOpenNav(!openNav)}
                        className="lg:text-2xl text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                        to="/thingsTodo">
                        Things To Do
                      </Link>
                      <Link
                        onClick={() => setOpenNav(!openNav)}
                        className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                        to="/thingsToDo/attractions-tours">
                        Attractions & Tours
                      </Link>
                      <Link
                        onClick={() => setOpenNav(!openNav)}
                        className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                        to="/thingsToDo/arts-cultures">
                        Arts & Cultures
                      </Link>
                      <Link
                        onClick={() => setOpenNav(!openNav)}
                        className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                        to="/thingsToDo/outdoor-wellness">
                        Outdoor & Wellness
                      </Link>
                      <Link
                        onClick={() => setOpenNav(!openNav)}
                        className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                        to="/thingsToDo/shopping">
                        Shopping
                      </Link>
                      <Link
                        onClick={() => setOpenNav(!openNav)}
                        className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                        to="/thingsToDo/Budget">
                        Budget
                      </Link>
                      <Link
                        onClick={() => setOpenNav(!openNav)}
                        className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                        to="/thingsToDo/family">
                        family
                      </Link>
                      <Link
                        onClick={() => setOpenNav(!openNav)}
                        className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                        to="/thingsToDo/hidden-gems">
                        Hidden Gems
                      </Link>
                      <Link
                        onClick={() => setOpenNav(!openNav)}
                        className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                        to="/thingsToDo/luxury">
                        Luxury
                      </Link>
                      <Link
                        onClick={() => setOpenNav(!openNav)}
                        className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                        to="/thingsToDo/pet-friendly">
                        Pet-Friendly
                      </Link>
                    </div>
                  </div>
                )}

                {activeCategory ? (
                  ''
                ) : (
                  <div className="">
                    <div
                      className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2 cursor-pointer"
                      onClick={() => handleCategoryClick('eatdrinks')}>
                      Eat and Drinks
                      <h2>
                        <FaPlus className="text-[16px]" />
                      </h2>
                    </div>
                  </div>
                )}
                {activeCategory === 'eatdrinks' && (
                  <div className="  transition-all duration-500">
                    <span
                      className="flex items-center duration-500 transition"
                      onClick={handleBackClick}>
                      {' '}
                      <Button className="flex  text-xl hover:shadow-transparent items-center bg-none bg-transparent shadow-transparent text-white">
                        <FaChevronLeft className="mr-2" /> Back
                      </Button>
                    </span>
                    <Link
                      onClick={() => setOpenNav(!openNav)}
                      className="lg:text-2xl text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                      to="/eat-drink">
                      Eat & Drink
                    </Link>
                    <Link
                      onClick={() => setOpenNav(!openNav)}
                      className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                      to="/eat-drink/bars">
                      Bars
                    </Link>
                    <Link
                      onClick={() => setOpenNav(!openNav)}
                      className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                      to="/eat-drink/clubs">
                      Clubs
                    </Link>
                    <Link
                      onClick={() => setOpenNav(!openNav)}
                      className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                      to="/eat-drink/dine-la-restaurant">
                      Dine la Restaurant
                    </Link>
                    <Link
                      onClick={() => setOpenNav(!openNav)}
                      className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                      to="/eat-drink/business-spotlight">
                      Business Spotlight
                    </Link>
                    {/* Add more subcategories as needed */}
                  </div>
                )}

                {activeCategory ? (
                  ''
                ) : (
                  <Link onClick={() => setOpenNav(false)} to="/events">
                    <div className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2">
                      Find Events
                    </div>
                  </Link>
                )}

                {activeCategory ? (
                  ''
                ) : (
                  <div className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2">
                    Itineraries
                  </div>
                )}

                {activeCategory ? (
                  ''
                ) : (
                  <div className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2">
                    Where to stay
                  </div>
                )}

                {activeCategory ? (
                  ''
                ) : (
                  <div
                    className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2 cursor-pointer"
                    onClick={() => handleCategoryClick('celebrate')}>
                    Celebrate LA Heritage
                    <h2>
                      <FaPlus className="text-[16px]" />
                    </h2>
                  </div>
                )}
                {activeCategory === 'celebrate' && (
                  <div className=" transition-all duration-500">
                    <span
                      className="flex items-center duration-500 transition"
                      onClick={handleBackClick}>
                      {' '}
                      <Button className="flex  text-xl hover:shadow-transparent items-center bg-none bg-transparent shadow-transparent text-white">
                        <FaChevronLeft className="mr-2" /> Back
                      </Button>
                    </span>
                    <Link
                      onClick={() => setOpenNav(!openNav)}
                      className="lg:text-2xl text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                      to="/celebrate-la-heritage">
                      Celebrate la Heritage
                    </Link>
                    <Link
                      onClick={() => setOpenNav(!openNav)}
                      className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                      to="/celebrate-la-heritage/aapi-heritage">
                      AAPI Heritage
                    </Link>
                    <Link
                      onClick={() => setOpenNav(!openNav)}
                      className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                      to="/celebrate-la-heritage/black-la">
                      Black LA
                    </Link>
                    <Link
                      onClick={() => setOpenNav(!openNav)}
                      className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                      to="/celebrate-la-heritage/latino-heritage">
                      Latino Heritage
                    </Link>
                    <Link
                      onClick={() => setOpenNav(!openNav)}
                      className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                      to="/celebrate-la-heritage/la-fruits">
                      La Fruits
                    </Link>
                    {/* Add more subcategories as needed */}
                  </div>
                )}

                {activeCategory ? (
                  ''
                ) : (
                  <div className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2">
                    Tourist Information
                  </div>
                )}

                {activeCategory ? (
                  ''
                ) : (
                  <div className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2">
                    Metting
                  </div>
                )}

                {activeCategory ? (
                  ''
                ) : (
                  <div
                    className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2 cursor-pointer"
                    onClick={() => handleCategoryClick('aboutla')}>
                    About LA Tourism
                    <h2>
                      <FaPlus className="text-[16px]" />
                    </h2>
                  </div>
                )}
                {activeCategory === 'aboutla' && (
                  <div className=" transition-all duration-500">
                    <span
                      className="flex items-center duration-500 transition"
                      onClick={handleBackClick}>
                      {' '}
                      <Button className="flex  text-xl hover:shadow-transparent items-center bg-none bg-transparent shadow-transparent text-white">
                        <FaChevronLeft className="mr-2" /> Back
                      </Button>
                    </span>
                    {/* Subcategories for "About LA Tourism" */}
                    <Link
                      onClick={() => setOpenNav(!openNav)}
                      className="lg:text-2xl text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                      to="/about-la-tourism">
                      About LA Tourism
                    </Link>
                    <Link
                      onClick={() => setOpenNav(!openNav)}
                      className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                      to="/about-la-tourism/travel-trade">
                      Travel Trade
                    </Link>
                    <Link
                      onClick={() => setOpenNav(!openNav)}
                      className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                      to="/about-la-tourism/membership">
                      Membership
                    </Link>
                    <Link
                      onClick={() => setOpenNav(!openNav)}
                      className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                      to="/about-la-tourism/business-spotlight">
                      Business spotlight
                    </Link>
                    <Link
                      onClick={() => setOpenNav(!openNav)}
                      className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                      to="/about-la-tourism/careers">
                      Careers
                    </Link>
                    <Link
                      onClick={() => setOpenNav(!openNav)}
                      className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                      to="/about-la-tourism/media">
                      Media
                    </Link>
                    <Link
                      onClick={() => setOpenNav(!openNav)}
                      className="text-xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2"
                      to="/about-la-tourism/researches">
                      Researches
                    </Link>
                    {/* Add more subcategories as needed */}
                  </div>
                )}

                <div className="max-md-hidden">
                  <Link
                    onClick={() => setOpenNav(!openNav)}
                    to="/login"
                    className="text-sm  transition-all duration-500 text-white hover:border-b-2">
                    Login
                  </Link>
                  <div className="flex gap-3 mt-5">
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

              <div className="text-white">
                <h1 className="text-3xl font-semibold">Today Must Read</h1>
                <img src={img2} className="mt-2 w-[450px] " alt="" />
                <p className="text-sm mt-2 font-semibold">HIDDEN GEMS OF LOS ANGELES</p>
              </div>

              <div className="md:hidden">
                <Link
                  onClick={() => setOpenNav(!openNav)}
                  to="/login"
                  className="text-sm  transition-all duration-500 text-white hover:border-b-2">
                  Login
                </Link>
                <div className="flex gap-3 mt-5">
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
          </div>
        </MobileNav>
      </main>
    </div>
  );
};

export default Navbar1;
