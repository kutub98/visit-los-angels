import React, { useState } from "react";
import { MobileNav, IconButton } from "@material-tailwind/react";
import { TiThMenu } from "react-icons/ti";
import img1 from "../../assets/image/dla_logo_gradient.svg";
import img2 from "../../assets/image/GreekTheatre.webp";
import { ImCross } from "react-icons/im";
import { FaFacebook, FaInstagram, FaPlus, FaSearch, FaTwitter } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Navbar1 = () => {
  const [openNav, setOpenNav] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);

  const toggleSearch = () => {
    setSearchVisible((prev) => !prev);
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div>
      <main className="bg-[#333333] px-5 ">
        <div className="flex justify-between items-center">
          <div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              <TiThMenu className="text-white text-4xl" />
            </IconButton>
          </div>

          <div>
            <img src={img1} className=" w-20 h-20 md:w-36  " alt="Logo" />
          </div>

          <div className="md:flex gap-5 items-center">
            <div>
              <button onClick={toggleSearch}>
                <FaSearch className="text-4xl text-white md:hidden" />
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
                <FaSearch className="text-4xl text-white" />
              </button>
            </div>
          </div>
        </div>
        <div>
          {searchVisible && (
            <div className="md:hidden relative flex justify-end w-full gap-2 md:w-max pb-2">
              <div className="relative flex w-full max-w-[24rem]">
                <input
                  type="email"
                  value={email}
                  onChange={onChange}
                  className="pr-20 px-4 py-3 text-black bg-white"
                  placeholder="Search"
                />
                <button size="md" className="px-5 py-2  bg-[#893a9c]">
                  GO
                </button>
              </div>
            </div>
          )}
        </div>

        <MobileNav
          open={openNav}
          className="fixed inset-0 z-50 bg-gradient-to-b from-[#ff9876]  via-[#ab67aa]  to-[#1cacb1]  h-svh w-full "
        >
          <div className="">
            <button
              onClick={() => setOpenNav(false)}
              className="absolute top-4 left-4 text-lg font-bold"
            >
              <ImCross className="text-3xl" />
            </button>

            <div className="p-20 grid grid-cols-2 gap-7">

              <div className="pl-8  flex flex-col justify-start ">

                <div className="text-2xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2">
                  Things to do
                  <h2>
                    <FaPlus />
                  </h2>
                </div>

                
                <div className="text-2xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2">
                  Eat and Drinks
                  <h2>
                    <FaPlus />
                  </h2>
                </div>

                <div className="text-2xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2">
                  Find Events
                  <h2>
                    <FaPlus />
                  </h2>
                </div>

                <div className="text-2xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2">
               Itineraries
                  <h2>
                    <FaPlus />
                  </h2>
                </div>

                <div className="text-2xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2">
                Where to stay
                  <h2>
                    <FaPlus />
                  </h2>
                </div>

                <div className="text-2xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2">
             Celebrate LA Heritage
                  <h2>
                    <FaPlus />
                  </h2>
                </div>

                <div className="text-2xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2">
                Tourist Information
                  <h2>
                    <FaPlus />
                  </h2>
                </div>

                <div className="text-2xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2">
               Metting
                  <h2>
                    <FaPlus />
                  </h2>
                </div>

                <div className="text-2xl flex justify-between text-white font-normal hover:bg-white hover:text-black p-2">
                About LA Tourism
                  <h2>
                    <FaPlus />
                  </h2>
                </div>

              <div>
                <h2 className="text-sm ml-5  text-white hover:border-b-2">Login</h2>
                <div className="flex gap-3 mt-5">
                  <p><FaFacebook className="text-xl"/></p>
                  <p><FaTwitter  className="text-xl"/></p>
                  <p><FaInstagram className="text-xl"/></p>
                  <p><AiFillTikTok className="text-xl"/></p>
                </div>
              </div>

              </div>

              <div className="text-white">
                <h1 className="text-3xl font-semibold">Today Must Read</h1>
                <img src={img2} className="mt-2" alt="" />
                <p className="text-sm mt-2 font-semibold">
                  HIDDEN GEMS OF LOS ANGELES
                </p>
              </div>
            </div>
          </div>
        </MobileNav>
      </main>
    </div>
  );
};

export default Navbar1;
