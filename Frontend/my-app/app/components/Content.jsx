
import React from 'react'
import Signup from '../(auth)/SignUp/page'
import { UserRegistration } from './UserRegistration'

const Content = () => {
  return (
       <div className='flex items-center bg-blue-50 sm:mt-4 flex-col mt-6  w-screen'> 
          <div className='flex flex-col justify-center gap-4 sm:mt-30 mt-12'>
                <p className='text-6xl text-center font-bold'>Share Documents</p>
                <p className='text-6xl text-center text-blue-700  font-bold'>Collaborate Seamlessly</p>
                <div className='mt-8 flex flex-col text-center'>
                   <p className='sm:text-2xl text-lg  text-gray-600'> 
                     Upload, share, and collaborate on documents with your team. Comment,
                     </p>
                   <p className='sm:text-2xl text-lg  text-gray-600'>
                     download, and manage your files all in one secure platform.
                     </p>
                </div>
          </div>
            <UserRegistration/>
        </div>
  )
}

export default Content