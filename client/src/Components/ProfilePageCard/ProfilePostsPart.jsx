import React, { useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { GrTable } from "react-icons/gr";
import { RiVideoFill, RiVideoLine } from "react-icons/ri";
import { BiBookmark, BiUserPin } from "react-icons/bi";
import { AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import ReqUserPostCard from "./ReqUserPostCard";

const ProfilePostsPart = () => {
  const [activeTab, setActiveTab] = useState("Post");
  const tabs = [
    {
      tab: "Post",
      icon: <AiOutlineTable className="text-xs" />,
      activeTab: "",
    },
    { tab: "Reels", icon: <RiVideoLine className="text-xs" />, activeTab: "" },
    { tab: "Saved", icon: <BiBookmark className="text-xs" />, activeTab: "" },
    { tab: "Tagged", icon: <AiOutlineUser className="text-xs" />, activeTab: "" },
  ];
  return (
    <div className="">
      <div className="flex space-x-14 border-t relative ">

        {tabs.map((item) => (
          <div
            onClick={() => setActiveTab(item.tab)}
            className={`${
              item.tab === activeTab ? "border-t border-black" : "opacity-60"
            } flex items-center cursor-pointer py-2 text-sm`}
          >
            <p>
                {item.icon}
            </p>
           
            <p className="ml-1 text-xs">{item.tab} </p> 
            
          </div>
        ))}
      </div>
      <div>
        <div className="flex flex-wrap">{[1,1,1,1,1,1,1,1].map((item,index)=> <ReqUserPostCard key={index}/>)}

        </div>
        
        
      </div>
    </div>
  );
};

export default ProfilePostsPart;
