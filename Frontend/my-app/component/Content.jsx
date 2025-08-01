import Link from "next/link"
import CardDetails from "./CardDetails"


const Content = () => {
  return (
       <div className='flex justify-center items-center bg-sky-50 mt-5 flex-col'> 
          <div className='flex flex-col justify-center gap-4 mt-20'>
                <p className='text-5xl text-center font-bold'>Share Documents</p>
                <p className='text-5xl text-center text-blue-700  font-bold'>Collaborate Seamlessly</p>
                <div className='mt-8 flex flex-col'>
                   <p className='text-2xl text-center text-gray-600'> Upload, share, and collaborate on documents with your team. Comment,</p>
                   <p className='text-2xl text-center  text-gray-600'>download, and manage your files all in one secure platform.</p>
                </div>
          </div>
            <div className='mt-5 flex justify-between gap-5'>
               <Link href={'/Signup'}>
                  <div className='bg-blue-700 flex text-amber-50 w-50 justify-center h-10 items-center text-xl rounded-md hover:bg-blue-500'> Get Started Free</div>
               </Link>
               <Link href={'/Signin'}>
                   <div className='bg-white hover:bg-blue-100 flex text-shadow-black font-se w-32 justify-center h-10 items-center text-xl rounded-md '> Sign In</div>
               </Link>
            </div>
            <div>
              <CardDetails/>
            </div>
        </div>
  )
}

export default Content