import { FileText } from 'lucide-react'
import Content from '../components/Content'
import FeedbackandContact from '../components/FeedbackandContact'

const FrontPage = () => {
  return (
    <div>
      <div className='flex sm:justify-between sm:items-center'>
        <div className='flex gap-2 item-center ml-5 mt-5'>
          <div>
            <FileText color='blue' size={40} />
          </div>
          <p className='text-2xl font-bold items-center flex'>ShareDoc</p>
        </div>
        <FeedbackandContact />
      </div>
      <Content />
    </div>
  )
}

export default FrontPage