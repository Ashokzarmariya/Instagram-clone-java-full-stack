import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsDot, BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import "./PostCard.css";

const PostCard = ({
  userProfileImage,
  username,
  audio,
  postImage,
  numberOfLikes,
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full"
            src={userProfileImage}
            alt=""
          />

          <div className="pl-2">
            <p className="font-semibold text-sm flex items-center">
              {username}{" "}
              <span className="opacity-50 flex items-center">
                {" "}
                <BsDot />
                5h{" "}
              </span>{" "}
            </p>
            <p className="font-thin text-sm">{audio} </p>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </div>
      <div className="mt-5 w-full">
        <img className="w-full" src={postImage} alt="" />
      </div>
      <div className="flex justify-between items-center w-full mt-5">
        <div className="flex items-center space-x-2 ">
          <AiOutlineHeart className="text-2xl hover:opacity-50 cursor-pointer" />
          <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
          <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
        </div>
        <div>
          <BsBookmark className="text-xl hover:opacity-50 cursor-pointer" />
        </div>
      </div>
      <div className="w-full mt-2 ">
        <p className="text-sm">{numberOfLikes} likes </p>
        <div className="flex mt-3">
          <div className="mr-3">
            <img
              className="w-10 h-10 rounded-full"
              src={
                "https://cdn.pixabay.com/photo/2022/12/22/02/56/heron-7671357__340.jpg"
              }
              alt=""
            />
          </div>

          <div className="w-[90%]">
          
              
              <span className="font-semibold"> {username} </span>
              <span className="commentBox">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero placeat facilis impedit, qui quia, aut velit ipsa, autem perspiciatis cumque et provident porro laboriosam eveniet quaerat quas aliquid eos maiores!
                
              </span>

            
          </div>
         
        </div>
         <p className="opacity-50 text-sm py-2">View all {29} comments</p>
         <input className="commentInput" type="text" placeholder="Add a comment..." />
      </div>
    </div>
  );
};

export default PostCard;
