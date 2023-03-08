import React from 'react'
import ProfilePostsPart from '../../Components/ProfilePageCard/ProfilePostsPart'
import UserDetailCard from '../../Components/ProfilePageCard/UserDetailCard'

const Profile = () => {
  return (
    <div className='px-20'>
        <div>
            <UserDetailCard username={"ashok.zarmariya"}/>
        </div>
        <div>
            <ProfilePostsPart/>
        </div>
    </div>
  )
}

export default Profile