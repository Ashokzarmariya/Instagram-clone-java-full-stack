import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";

import { useNavigate } from "react-router";
import { mainu } from "./SidebarConfig";

const Sidebar = () => {
  const navigate=useNavigate();
  
  const [activeTab,setActiveTab]=useState("Home");

  const handleTabClick=(tab)=>{
    setActiveTab(tab)
    if(tab==="Profile"){
navigate("/username")
    }
  }
  return (
    <div className=" sticky top-0 h-[100vh] flex">

      <div className="px-10">
         <div>
        <h3 className="text-2xl mt-10">instagram</h3>
        <div className="mt-10">
          {mainu.map((item) => (
            <div onClick={()=>handleTabClick(item.title,)} className="flex items-center mb-5 cursor-pointer text-lg">
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
