

import { FileText } from 'lucide-react';
import SignUpForm from '../../components/SignUpForm';
const page = () => {


  return (
    <div>
      <div className='w-full max-w-md  mx-auto mt-20 p-7 shadow-lg rounded-lg border'>
        <div className='flex flex-col items-center text-center mb-6'>
          <FileText size={50} color='blue' className='mb-7' />
          <p className=' text-3xl font-bold'>Create Account </p>
          <p className='mt-3 text-lg font-semibold '>Join thousands of users sharing documents</p>
        </div>
        <SignUpForm/>
      </div>
    </div>
  )
}

export default page