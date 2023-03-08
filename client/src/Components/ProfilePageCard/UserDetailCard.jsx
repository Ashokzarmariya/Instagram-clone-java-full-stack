import React from 'react'
import {TbCircleDashed} from "react-icons/tb"

const UserDetailCard = ({username}) => {
  return (
    <div className='py-10'>
        <div className='flex items-center'>
            <img className='w-32 h-32 rounded-full' src="https://cdn.pixabay.com/photo/2020/12/13/16/37/woman-5828787__340.jpg" alt="" />

            <div className='ml-10 space-y-5 text-xs'>
                <div className=' flex space-x-10 items-center'>
                    <p className='text-base'>{username}</p>
                    <button className='text-xs py-1 px-5 bg-slate-100 hover:bg-slate-300 rounded-md font-semibold'>Edit profile</button>
                    <button className='text-xs py-1 px-5 bg-slate-100 hover:bg-slate-300 rounded-md font-semibold'>Add tools</button>
                    <TbCircleDashed className='text-xl'/>
                </div>

                <div className='flex space-x-10'>
                    <div>
                        <span className='font-semibold mr-2'>41</span>
                    <span>posts</span>
                    </div>
                    
                    <div>
                        <span className='font-semibold mr-2'>68</span>
                    <span>followers</span>
                    </div>
                    <div>
                        <span className='font-semibold mr-2'>79</span>
                    <span>following</span>
                    </div>
                </div>
                <div>
                    <p className='font-semibold'>Ashok Zarmariya</p>
                    <p className='font-thin text-sm'>We can write as many amazing lines of code as possible to run helpful software.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default UserDetailCard