import React from "react";
import { BsDot } from "react-icons/bs";
import SuggestionsUserCard from "./SuggestionsUserCard";

const HomeRight = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center ">
            <img
              className="w-12 h-12 rounded-full"
              src="https://cdn.pixabay.com/photo/2023/01/26/04/51/hummingbird-7745078__340.jpg"
              alt=""
            />
            <div className="ml-3">
              <p>ashok.zarmariya</p>
              <p className="opacity-70">Ashok Zarmariya</p>
            </div>
          </div>
          <p className="text-blue-700">switch</p>
        </div>
        <div className="flex justify-between py-5 items-center">
          <p className="font-semibold opacity-70">Suggestions for you</p>
          <p className="text-xs font-semibold opacity-95">View All</p>
        </div>

        <div className="space-y-5">
          {[1, 1, 1, 1, 1].map((item, index) => (
            <SuggestionsUserCard
              key={index}
              image={
                "https://cdn.pixabay.com/photo/2023/01/18/14/39/family-7727035__340.jpg"
              }
              username="indian_traveler"
              description={"Follows you"}
            />
          ))}
        </div>
        <div className="opacity-60 text-xs flex items-center flex-wrap mt-10">
            <span>About</span>
            <BsDot/>
            <span>Help</span>
            <BsDot/>
            <span>Press</span>
            <BsDot/>
            <span>API</span>
            <BsDot/>
            <span>Jobs</span>
            <BsDot/>
            <span>Privacy</span>
            <BsDot/>
            <span>Terms</span>
            <BsDot/>
            <span>Locations</span>
            <BsDot/>
            <span>Language</span>
            <BsDot/>
            <span>English</span>
            <BsDot/>
            <span>Meta</span>
            <BsDot/>
            <span>Verified</span>
                
         
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
