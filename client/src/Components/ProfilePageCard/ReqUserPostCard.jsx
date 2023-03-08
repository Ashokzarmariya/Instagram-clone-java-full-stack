import React from 'react';
import "./ReqUserPostCard.css";
import {AiFillHeart} from "react-icons/ai";
import {FaComment} from "react-icons/fa";

const ReqUserPostCard = () => {
  return (
    <div className='p-2'>
        <div className='post w-52 h-52'>
            <img className=' cursor-pointer' src="https://cdn.pixabay.com/photo/2023/01/08/13/28/demoiselle-crane-7705173__340.jpg" alt="" />
            <div className='overlay'>
                <div className='overlay-text flex justify-between '>
                    <div className='flex items-center'><AiFillHeart className='mr-2'/> <span>15</span></div>
                    <div className='flex items-center'><FaComment className='mr-2'/> <span>33</span></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReqUserPostCard