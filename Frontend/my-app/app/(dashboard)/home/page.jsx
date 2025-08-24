import { FileText, LogOut, Upload, User } from 'lucide-react'
import React from 'react'
import NavBar from '@/app/components/NavBar'

const DashBoardpage = () => {
  return (
    <div>
         <div className='flex sm:justify-between sm:items-center'>
                    <div className='flex gap-1 item-center ml-2 mr-2  sm:mr-5 mt-5 sm:gap-2'>
                        <div>
                            <FileText color='blue' size={32} className='sm:size-10 sm:ml-3' />
                        </div>
                         <p className='sm:text-3xl text-2xl font-bold items-center flex'>ShareDoc</p>
                    </div>
              <NavBar/>
              
          </div>
    </div>
  )
}

export default DashBoardpage
