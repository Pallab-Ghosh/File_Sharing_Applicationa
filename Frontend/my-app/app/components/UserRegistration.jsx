'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
   

export const UserRegistration = () => {
 const router = useRouter();
  return (
    <div className='mt-7 flex flex-col sm:flex-row sm:gap-3'>
               
                <div className='bg-blue-600 flex text-amber-50 w-92 sm:w-50 justify-center h-12 items-center text-2xl rounded-2xl hover:bg-amber-900'> 
                   <button
                    onClick={() => router.replace("/SignUp")}
                    className='bg-blue-600 flex text-amber-50 w-92 sm:w-50 justify-center h-12 items-center text-2xl rounded-2xl hover:bg-amber-900'
                    >
                     Get Started Free
                    </button>
                  </div>
               
             
                  <div className='w-92 hover:bg-blue-200 flex text-black sm:w-36 justify-center h-12 items-center text-center text-2xl rounded-2xl'>
                        <button
                        onClick={() => router.replace("/SignIn")}
                        className='bg-blue-400 w-92 hover:bg-blue-200 flex text-black sm:w-36 justify-center h-12 items-center text-center text-2xl rounded-2xl mt-3 sm:mt-0'
                        >
                        Sign In
                        </button>
                   </div>
                
            </div>
  )
}
