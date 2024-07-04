import React, { useState } from 'react';
import { Tooltip } from '@material-tailwind/react';
import { Link, useLocation } from 'react-router-dom';
import { BsBlockquoteRight, BsChevronBarDown, BsChevronBarRight } from 'react-icons/bs';
import { MdEventAvailable } from 'react-icons/md';
import { RiAdvertisementLine } from 'react-icons/ri';
import { CiYoutube } from 'react-icons/ci';
import { FcAddDatabase } from 'react-icons/fc';
import { TfiLayoutSliderAlt } from 'react-icons/tfi';
import { LuChevronFirst } from 'react-icons/lu';
import { LuListTodo } from 'react-icons/lu';
import { MdOutlineWhereToVote, MdOutlineCelebration } from 'react-icons/md';
import { GrAttraction } from 'react-icons/gr';
import { FaAddressCard } from 'react-icons/fa';
import { IoFastFoodSharp } from 'react-icons/io5';
import { DiTravis } from 'react-icons/di';
import { FaMeetup } from 'react-icons/fa';
import { GrCircleInformation } from 'react-icons/gr';
import { RiDrinks2Line } from 'react-icons/ri';
import { CgCardClubs } from 'react-icons/cg';
import { SiSpotlight } from 'react-icons/si';
import { MdAttractions } from 'react-icons/md';
import { MdCameraOutdoor } from 'react-icons/md';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { GiCultist } from 'react-icons/gi';
import { GiConvergenceTarget } from 'react-icons/gi';
import { MdFamilyRestroom } from 'react-icons/md';
import { GiGems } from 'react-icons/gi';
import { MdOutlinePets } from 'react-icons/md';
import { BsBank } from 'react-icons/bs';
import { GiBlackBridge } from 'react-icons/gi';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { FaTrademark } from 'react-icons/fa';
import { LiaUserFriendsSolid } from 'react-icons/lia';
import { IoBusinessOutline } from 'react-icons/io5';
import { GrChannel } from 'react-icons/gr';
import { GiArchiveResearch } from 'react-icons/gi';
const DashSideBar = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation(); // React Router hook to get current location

  const [openCategories, setOpenCategories] = useState([]);

  const toggleCategory = (index) => {
    const isOpen = openCategories.includes(index);
    if (isOpen) {
      setOpenCategories(openCategories.filter((i) => i !== index));
    } else {
      setOpenCategories([...openCategories, index]);
    }
  };

  const Menus = [
    {
      title: 'Add Data',
      icon: <FcAddDatabase className="h-5 w-5" />,
      link: '/admin/addData'
    },
    {
      title: 'Slider',
      icon: <TfiLayoutSliderAlt className="h-5 w-5" />,
      link: '/admin/slider'
    },
    {
      title: 'Quota',
      icon: <BsBlockquoteRight className="h-5 w-5" />,
      link: '/admin/quota'
    },
    {
      title: 'Event',
      icon: <MdEventAvailable className="h-5 w-5" />,
      link: '/admin/createEvent'
    },
    {
      title: 'Advertisement',
      icon: <RiAdvertisementLine className="h-5 w-5" />,
      link: '/admin/advertisement'
    },
    {
      title: 'Video Streaming',
      icon: <CiYoutube className="h-5 w-5" />,
      link: '/admin/VideoStreaming'
    },
    {
      title: 'Where To Stay',
      icon: <MdOutlineWhereToVote className="h-5 w-5" />,
      link: '/admin/VideoStreaming'
    },
    {
      title: 'Itineraries',
      icon: <GrAttraction className="h-5 w-5" />,
      link: '/admin/itineraries'
    },
    {
      title: 'Tourist Information',
      icon: <GrCircleInformation className="h-5 w-5" />,
      link: '/admin/touristInformation'
    },
    {
      title: 'Meeting',
      icon: <FaMeetup className="h-5 w-5" />,
      link: '/admin/meeting'
    },
    {
      title: 'Eat & Drink',
      isCategory: true,
      icon: <IoFastFoodSharp className="h-6 w-6" />,
      items: [
        {
          title: 'Bars',
          icon: <RiDrinks2Line className="h-6 w-6" />,
          link: '/admin/thingsTodo/bars'
        },

        {
          title: 'Clubs',
          icon: <CgCardClubs className="h-6 w-6" />,
          link: '/admin/thingsTodo/clubs'
        },
        {
          title: 'Dine LA Restaurants Week',
          icon: <GrAttraction className="h-6 w-6" />,
          link: '/admin/thingsTodo/dineLaRestaurantsWeek'
        },
        {
          title: 'Business Spotlight',
          icon: <SiSpotlight className="h-6 w-6" />,
          link: '/admin/thingsTodo/businessSpotlight'
        }
      ]
    },
    {
      title: 'Things to Do',
      isCategory: true,
      icon: <LuListTodo className="h-6 w-6" />,
      items: [
        {
          title: 'Attractions & Tours',
          icon: <MdAttractions className="h-6 w-6" />,
          link: '/admin/thingsTodo/attractionsTours'
        },

        {
          title: 'Outdoors & Wellness',
          icon: <MdCameraOutdoor className="h-6 w-6" />,
          link: '/admin/thingsTodo/outdoorsWellness'
        },
        {
          title: 'Shopping',
          icon: <MdOutlineShoppingBag className="h-6 w-6" />,
          link: '/admin/thingsTodo/shopping'
        },

        {
          title: 'Arts & Cultures',
          icon: <GiCultist className="h-6 w-6" />,
          link: '/admin/thingsTodo/artsCultures'
        },
        {
          title: 'Budget',
          icon: <GiConvergenceTarget className="h-6 w-6" />,
          link: '/admin/thingsTodo/budget'
        },

        {
          title: 'Family',
          icon: <MdFamilyRestroom className="h-6 w-6" />,
          link: '/admin/thingsTodo/family'
        },
        {
          title: 'Hidden Gems',
          icon: <GiGems className="h-6 w-6" />,
          link: '/admin/thingsTodo/hiddenGems'
        },

        {
          title: 'Luxury',
          icon: <GrAttraction className="h-6 w-6" />,
          link: '/admin/thingsTodo/luxury'
        },
        {
          title: 'Pet-friendly',
          icon: <MdOutlinePets className="h-6 w-6" />,
          link: '/admin/thingsTodo/petFriendly'
        }
      ]
    },
    {
      title: 'Celebrate LA Heritage',
      isCategory: true,
      icon: <MdOutlineCelebration className="h-6 w-6" />,
      items: [
        {
          title: 'AAPI Heritage',
          icon: <BsBank className="h-6 w-6" />,
          link: '/admin/thingsTodo/aapiHeritage'
        },
        {
          title: 'Black LA',
          icon: <GiBlackBridge className="h-6 w-6" />,
          link: '/admin/thingsTodo/blackLA'
        },

        {
          title: 'Latino Heritage',
          icon: <GrAttraction className="h-6 w-6" />,
          link: '/admin/thingsTodo/latinoHeritage'
        }
      ]
    },
    {
      title: 'About LA Tourism',
      isCategory: true,
      icon: <DiTravis className="h-6 w-6" />,
      items: [
        {
          title: 'About LA Tourism',
          icon: <IoIosInformationCircleOutline className="h-6 w-6" />,
          link: '/admin/thingsTodo/aboutLATourism'
        },

        {
          title: 'Travel Trade',
          icon: <FaTrademark className="h-6 w-6" />,
          link: '/admin/thingsTodo/travelTrade'
        },
        {
          title: 'Membership',
          icon: <LiaUserFriendsSolid className="h-6 w-6" />,
          link: '/admin/thingsTodo/membership'
        },

        {
          title: 'Business Spotlight',
          icon: <IoBusinessOutline className="h-6 w-6" />,
          link: '/admin/thingsTodo/businessSpotlight'
        },
        {
          title: 'Media',
          icon: <GrChannel className="h-6 w-6" />,
          link: '/admin/thingsTodo/media'
        },

        {
          title: 'Research',
          icon: <GiArchiveResearch className="h-6 w-6" />,
          link: '/admin/thingsTodo/research'
        },
        {
          title: 'Careers',
          icon: <FaAddressCard className="h-6 w-6" />,
          link: '/admin/thingsTodo/careers'
        }
      ]
    }
  ];

  return (
    <div className="flex relative bg-[#1cacb1] h-full p-2 shadow-inner">
      <div
        className={`overflow-y-scroll min-h-screen customScrollBar rounded-md shadow-2xl bg-white ${
          open ? 'w-72' : 'w-20 p-0'
        } bg-dark-purple h-screen p-5 pt-8  duration-300`}>
        <LuChevronFirst
          className={` absolute cursor-pointer bg-white h-6 -right-3 top-10 w-7 border-dark-purple
           border-2 rounded-full ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <LuChevronFirst
            className={`cursor-pointer w-6 h-6 bg-white duration-500 ${open && 'rotate-[360deg]'}`}
          />
          <h1 className={`origin-left font-medium text-xl duration-200 ${!open && 'scale-0'}`}>
            Dashboard
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <React.Fragment key={index}>
              {Menu.isCategory ? (
                <>
                  <li
                    className={`flex rounded-md p-2 shadow justify-between
                       hover:bg-[#1cacb1] hover:text-white
                        items-center my-1 gap-x-4font-bold text-sm
                         text-gray-900  px-2 cursor-pointer ${openCategories.includes(index) ? 'bg-gray-700 text-white' : 'bg-white'} `}
                    onClick={() => toggleCategory(index)}>
                    <div className="flex items-center ">
                      <Tooltip
                        content={Menu.title}
                        placement="right"
                        className={`${open ? 'hidden' : ''}`}>
                        <span>{Menu.icon}</span>
                      </Tooltip>
                      <span className={`${!open && 'hidden'} origin-left duration-200`}>
                        {Menu.title}
                      </span>
                    </div>
                    <span className={`${open ? '' : 'hidden'}`}>
                      <BsChevronBarRight
                        className={` h-5 w-5 ${openCategories.includes(index) ? ' rotate-90 duration-500 transition' : ' duration-500'}`}
                      />
                    </span>
                  </li>
                  {openCategories.includes(index) && (
                    <>
                      {Menu.items.map((item, subIndex) => (
                        <Link
                          to={item.link}
                          key={subIndex}
                          className={`flex ml-2 rounded-md p-2 cursor-pointer hover:bg-[#1cacb1] hover:text-white text-sm items-center my-1 gap-x-4 ${
                            location.pathname === item.link
                              ? 'bg-[#1cacb1] text-white'
                              : 'bg-white shadow'
                          }`}>
                          <Tooltip content={item.title} placement="right">
                            <span>{item.icon}</span>
                          </Tooltip>
                          <span className={`${!open && 'hidden'} origin-left duration-200`}>
                            {item.title}
                          </span>
                        </Link>
                      ))}
                    </>
                  )}
                </>
              ) : (
                <Link
                  to={Menu.link}
                  className={`flex rounded-md p-2 cursor-pointer hover:bg-[#1cacb1] hover:text-white text-sm items-center my-1 gap-x-4 ${
                    location.pathname === Menu.link ? 'bg-[#1cacb1] text-white' : 'bg-white shadow'
                  }`}>
                  <Tooltip content={Menu.title} placement="right">
                    <span>{Menu.icon}</span>
                  </Tooltip>
                  <span className={`${!open && 'hidden'} origin-left duration-200`}>
                    {Menu.title}
                  </span>
                </Link>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashSideBar;
