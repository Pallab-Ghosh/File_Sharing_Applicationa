import React from 'react'
import SignUpForm from '../../components/SignInForm';
import SignInForm from '../../components/SignInForm';
import { FileText } from 'lucide-react';
const page = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='shadow-2xl w-96 sm:w-lg'>
            <div className='mb-20 text-center flex flex-col items-center'>
               <FileText size={40} color='blue' className='mb-7' />
              <p className='font-bold text-4xl mb-3'>Welcome Back</p>
              <p className=' text-lg'>Sign in to access your documents</p>
          </div>
            <div>
              <SignInForm/>
            </div>
        </div>
    </div>
  )
}

export default page