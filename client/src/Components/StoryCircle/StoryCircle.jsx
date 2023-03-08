import React from 'react'

const StoryCircle = ({image,username}) => {
  return (
    <div>
        <img className='w-16 h-16 rounded-full' src={image} alt="" />
        <p>{username?.length>6?username.substring(0,6)+"...":username}</p>
    </div>
  )
}

export default StoryCircle