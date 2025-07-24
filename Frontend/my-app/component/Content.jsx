
import React from 'react'
import Signup from './Signup'
import Signin from './Signin'

const Content = () => {
  return (
       <div className='flex justify-center items-center bg-blue-50 mt-10 flex-col'> 
          <div className='flex flex-col justify-center gap-4 mt-20'>
                <p className='text-6xl text-center font-bold'>Share Documents</p>
                <p className='text-6xl text-center text-blue-700  font-bold'>Collaborate Seamlessly</p>
                <div className='mt-8 flex flex-col'>
                   <p className='text-2xl text-center text-gray-600'> Upload, share, and collaborate on documents with your team. Comment,</p>
                   <p className='text-2xl text-center  text-gray-600'>download, and manage your files all in one secure platform.</p>
                </div>
          </div>
            <div className='mt-5 flex justify-between gap-5'>
               <div className='bg-blue-600 flex text-amber-50 w-50 justify-center h-12 items-center text-2xl rounded-md hover:bg-amber-900'> Get Started Free</div>
                <div className='bg-blue-50 hover:bg-blue-200 flex text-black w-32 justify-center h-10 items-center text-2xl rounded-md '> Sign In</div>
            </div>
        </div>
  )
}

export default Content