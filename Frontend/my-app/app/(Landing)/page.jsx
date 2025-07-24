import Content from '@/component/Content'
import { FileText } from 'lucide-react'
import React from 'react'

const FrontPage = () => {
  return (
       <div className=''>
        <div className='flex gap-2 content-center ml-5 mt-5'>
         <div> <FileText color='blue' size={50}/></div>
          <p className='text-3xl font-bold items-center flex'>ShareDoc</p>
        </div>
        <Content/>
       </div>
  )
}

export default FrontPage