'use client'
import { LogOut, Upload, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
 
 const Navbar = () => {
  const router = useRouter();

   return (
     <div>
        
          <div className="flex mt-5 sm:gap-4 p-1 justify-between sm:mr-5 ml-3 gap-1">
                    <button className='bg-blue-600 sm:gap-3 hover:bg-blue-800 flex text-shadow-black font-semibold w-28 sm:w-60 sm:text-xl sm:h-14 justify-center h-8 items-center text-xl rounded-md text-white'
                    
                    >
                        <Upload size={28} />
                       Upload Document
                    </button>  
                    <button className='bg-gray-50 sm:gap-3 hover:bg-gray-200 text-black  sm:w-52 sm:h-14 sm:text-xl  flex text-shadow-black  w-28 justify-center h-8 items-center text-xl rounded-sm '
                    
                    > 
                          <User size={28} />
                           Account Info
                    </button>

                    <button className='bg-gray-50 sm:gap-3 text-red-600 hover:bg-red-50  sm:w-48 sm:h-14 sm:text-xl  flex text-shadow-black  w-28 justify-center h-8 items-center text-xl rounded-sm '
                    onClick={()=>router.push('/')}
                    > 
                         <LogOut size={28} />
                         Sign Out
                    </button>

                </div>
     </div>
   )
 }
 
 export default Navbar