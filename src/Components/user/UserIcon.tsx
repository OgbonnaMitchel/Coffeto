import React from 'react'
import Userimg from "../../assets/images/UserIcon.png"
const UserIcon = () => {
  return (
    <div className='flex items-center gap-2'>
        <img src={Userimg} alt="" className='w-8' />
        <p className='pacifco text-white font-medium text-base'>User</p>
    </div>
  )
}

export default UserIcon