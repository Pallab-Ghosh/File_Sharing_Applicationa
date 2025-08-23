import { FileText } from 'lucide-react'
import Content from '../components/Content'
import FeedbackandContact from '../components/FeedbackandContact'

const FrontPage = () => {
  return (
    <div>
      <div className='flex sm:justify-between sm:items-center'>
        <div className='flex gap-1 item-center ml-2 mr-2  sm:mr-5 mt-5 sm:gap-2'>
          <div>
            <FileText color='blue' size={32} className='sm:size-10 sm:ml-3' />
          </div>
          <p className='sm:text-3xl text-2xl font-bold items-center flex'>ShareDoc</p>
        </div>
        <FeedbackandContact />
      </div>
      <Content />
    </div>
  )
}

export default FrontPage