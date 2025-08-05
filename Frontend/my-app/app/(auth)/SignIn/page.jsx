'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const SignIn = () => {
  const router = useRouter();
  return (
    <div>
       <button onClick={()=>router.push('/')}>Go Back</button>
      SignIn
      </div>
  )
}

export default SignIn