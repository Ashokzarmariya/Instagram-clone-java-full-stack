import { useDisclosure } from "@chakra-ui/hooks";
import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";

import { useNavigate } from "react-router";
import CreatePostModal from "../Create/CreatePostModal";
import { mainu } from "./SidebarConfig";

const Sidebar = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Home");

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Profile") {
      navigate("/username");
    } else if (tab === "Home") {
      navigate("/");
    }
    else if(tab==="Create"){
      onOpen();
    }
  };
  return (
    <div className=" sticky top-0 h-[100vh] flex">
      <div className="px-10">
        <div>
          <h3 className="text-2xl mt-10">instagram</h3>
          <div className="mt-10">
            {mainu.map((item) => (
              <div
                onClick={() => handleTabClick(item.title)}
                className="flex items-center mb-5 cursor-pointer text-lg"
              >
                {activeTab === item.title ? item.activeIcon : item.icon}
                <p
                  className={` ${
                    activeTab === item.title ? "font-bold" : "font-semibold"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center bottom-10 cursor-pointer">
          <IoReorderThreeOutline className="text-2xl" />
          <p className="ml-5">More</p>
        </div>
      </div>
      <div className="w-[.5px] opacity-30 h-[100vh] bg-black"></div>

      <CreatePostModal onClose={onClose} isOpen={isOpen} onOpen={onOpen}/>
    </div>
  );
};

export default Sidebar;
