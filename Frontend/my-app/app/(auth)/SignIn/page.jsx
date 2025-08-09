import React from 'react'
import SignUpForm from '../../components/SignInForm';
import SignInForm from '../../components/SignInForm';
const page = () => {
  return (
    <div>
       <div>
           <p className='font-bold text-xl'>Welcome Back</p>
           <p className='font-semibold text-lg'>Sign in to access your documents</p>
       </div>
        <div>
           <SignInForm/>
        </div>
    </div>
  )
}

export default page