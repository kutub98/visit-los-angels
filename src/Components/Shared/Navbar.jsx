import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { TiThMenu } from "react-icons/ti";
import img1 from "../../assets/image/dla_logo_gradient.svg";
import { CiSearch } from "react-icons/ci";

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

          <div className="md:flex gap-2 items-center">
            <div>
              <button onClick={toggleSearch}>
                <CiSearch className="text-4xl md:hidden" />
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
                  <Button
                    size="md"
                    className="  bg-[#893a9c]"
                  >
                    Go
                  </Button>
                </div>
            
              </div>
            )}

            <div className="max-md-hidden">
              <button onClick={toggleSearch}>
                <CiSearch className="text-4xl text-white" />
              </button>
            </div>
          </div>


        </div>
          <div>
          {searchVisible && (
              <div className="md:hidden relative flex justify-end w-full gap-2 md:w-max">
                <div className="relative flex w-full max-w-[24rem]">
                  <input
                    type="email"
                    value={email}
                    onChange={onChange}
                    className="pr-20 px-4 py-3 text-black bg-white"
                 placeholder="Search"
                  />
                  <button
                    size="md"
                    className="px-5 py-2  bg-[#893a9c]"
                  >
                    GO
                  </button>
                </div>
            
              </div>
            )}
          </div>

        <MobileNav open={openNav}>
          <div className="container mx-auto">
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="text" size="sm">
                <span>Log In</span>
              </Button>
              <Button fullWidth variant="gradient" size="sm">
                <span>Sign in</span>
              </Button>
            </div>
          </div>
        </MobileNav>
      </main>
    </div>
  );
};

export default Navbar1;
