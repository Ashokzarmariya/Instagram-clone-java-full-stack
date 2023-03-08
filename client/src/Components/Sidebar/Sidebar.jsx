import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineSearch,
  AiOutlineCompass,
  AiFillCompass,
  AiFillMessage,
  AiOutlineMessage,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlinePlusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { RiVideoFill, RiVideoLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  const mainu = [
    {
      title: "Home",
      icon: <AiOutlineHome className="text-2xl mr-5" />,
      activeIcon: <AiFillHome className="text-2xl mr-5" />,
    },
    {
      title: "Search",
      icon: <AiOutlineSearch className="text-2xl mr-5" />,
      activeIcon: <AiOutlineSearch className="text-2xl mr-5" />,
    },
    {
      title: "Explore",
      icon: <AiOutlineCompass className="text-2xl mr-5" />,
      activeIcon: <AiFillCompass className="text-2xl mr-5" />,
    },
    {
      title: "Reels",
      icon: <RiVideoLine className="text-2xl mr-5" />,
      activeIcon: <RiVideoFill className="text-2xl mr-5" />,
    },
    {
      title: "Message",
      icon: <AiOutlineMessage className="text-2xl mr-5" />,
      activeIcon: <AiFillMessage className="text-2xl mr-5" />,
    },
    {
      title: "Notifications",
      icon: <AiOutlineHeart className="text-2xl mr-5" />,
      activeIcon: <AiFillHeart className="text-2xl mr-5" />,
    },
    {
      title: "Create",
      icon: <AiOutlinePlusCircle className="text-2xl mr-5" />,
      activeIcon: <AiFillPlusCircle className="text-2xl mr-5" />,
    },
    { title: "Profile", icon: <CgProfile className="text-2xl mr-5" />, activeIcon: <CgProfile className="text-2xl mr-5" /> },
  ];
  const [activeTab,setActiveTab]=useState("Home");
  return (
    <div className=" sticky top-0 h-[100vh] flex">

      <div className="px-10">
         <div>
        <h3 className="text-2xl mt-10">instagram</h3>
        <div className="mt-10">
          {mainu.map((item) => (
            <div onClick={()=>setActiveTab(item.title)} className="flex items-center mb-5 cursor-pointer text-lg">
              {activeTab===item.title? item.activeIcon: item.icon}
              <p className={`text-lg ${activeTab===item.title?"font-semibold":""}`}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center bottom-10 cursor-pointer">
        <IoReorderThreeOutline className="text-2xl" />
        <p className="ml-5">More</p>
      </div>
      </div>
      <div className="w-[1px] opacity-40 h-[100vh] bg-black"></div>

    </div>
  );
};

export default Sidebar;
