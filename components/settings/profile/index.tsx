import React from 'react'
import ProfileForm from '@/components/shared/forms/profile.form'
import { getUserDetails } from '@/lib/actions/profile'
const ProfilePage = async () => {
  const userData = await  getUserDetails();
  console.log(userData)
  return (
    <div className='mt-6 w-full md:w-[60%]'>
        <ProfileForm user={userData} />
    </div>
  )
}

export default ProfilePage