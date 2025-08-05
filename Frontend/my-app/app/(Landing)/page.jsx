
 
import { FileText } from 'lucide-react'
import Content from '../components/Content'


const FrontPage = () => {
  return (
       <div>
        <div className='flex gap-2 content-center ml-5 mt-5'>
         <div> <FileText color='blue' size={40}/></div>
          <p className='text-2xl font-bold items-center flex'>ShareDoc</p>
        </div>
         <Content/>
        
       </div>
  )
}

export default FrontPage