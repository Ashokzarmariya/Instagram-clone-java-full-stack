import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostModal from '../../Components/Create/Demo'
import Sidebar from '../../Components/Sidebar/Sidebar'
import HomePage from '../HomePage/HomePage'
import Profile from '../Profile/Profile'


const Routers = () => {
  return (
    <div className='flex'>
        <div className="sidebarBox w-[20%] flex">
        <Sidebar />
      </div>
        {/* <PostModal/> */}
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/username" element={<Profile/>}></Route>
      </Routes>
    </div>
  )
}

export default Routers