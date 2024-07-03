import React, { useState } from 'react';
import { Tooltip } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { BsBlockquoteRight } from 'react-icons/bs';
import { MdEventAvailable } from 'react-icons/md';
import { RiAdvertisementLine } from 'react-icons/ri';
import { CiYoutube } from 'react-icons/ci';
import { FcAddDatabase } from 'react-icons/fc';
import { TfiLayoutSliderAlt } from 'react-icons/tfi';
import { LuChevronFirst } from 'react-icons/lu';
const DashSideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: 'Add Data', icon: <FcAddDatabase className="h-5 w-5" />, link: '/admin/addData' },
    { title: 'Slider', icon: <TfiLayoutSliderAlt className="h-5 w-5" />, link: '/admin/slider' },
    { title: 'Quota', icon: <BsBlockquoteRight className="h-5 w-5" />, link: '/admin/quota' },
    { title: 'Event', icon: <MdEventAvailable className="h-5 w-5" />, link: '/admin/createEvent' },
    {
      title: 'Advertisement',
      icon: <RiAdvertisementLine className="h-5 w-5" />,
      link: '/admin/advertisement'
    },
    {
      title: 'Video Streaming ',
      icon: <CiYoutube className="h-5 w-5" />,
      link: '/admin/VideoStreaming'
    }
  ];

  return (
    <div className="flex bg-[#1cacb1] p-2 shadow-inner">
      <div
        className={` overflow-y-scroll customScrollBar rounded-md shadow-2xl bg-white   ${
          open ? 'w-72' : 'w-20 '
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}>
        <LuChevronFirst
          className={`absolute cursor-pointer bg-white  h-6 right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <LuChevronFirst
            className={`cursor-pointer w-6 h-6 bg-white duration-500 ${open && 'rotate-[360deg]'}`}
          />
          <h1 className={` origin-left font-medium text-xl duration-200 ${!open && 'scale-0'}`}>
            Dashboard
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link
              to={Menu.link}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white  text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-light-white'} `}>
              <Tooltip content={Menu.title} placement="right">
                <span>{Menu.icon}</span>
              </Tooltip>

              <span className={`${!open && 'hidden'} origin-left duration-200`}>{Menu.title}</span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashSideBar;
