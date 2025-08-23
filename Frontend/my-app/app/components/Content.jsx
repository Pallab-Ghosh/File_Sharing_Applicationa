import Link from "next/link"
import CardDetails from "./CardDetails"


const Content = () => {
   return (
      <div className='flex justify-center items-center bg-sky-50 mt-5 flex-col'>
         <div className='flex flex-col justify-center gap-4 mt-20 sm:mt-36 '>
            <p className='text-5xl sm:text-7xl text-center font-bold'>Share Documents</p>
            <p className='text-5xl sm:text-7xl text-center text-blue-700  font-bold'>Collaborate Seamlessly</p>
            <div className='mt-8 flex flex-col p-4 mb-6'>
               <p className='text-xl text-center text-gray-600'> Upload, share, and collaborate on documents with your team. Comment,<br />
                  download, and manage your files all in one secure platform.</p>
            </div>
         </div>
         <div className='mt-5 sm:mt-12 flex sm:justify-between gap-5 flex-col sm:flex-row'>
            <Link href={'/SignUp'}>
               <div className='bg-blue-700 flex text-amber-50 w-96 sm:w-56 sm:text-2xl sm:h-14 justify-center h-10 items-center text-xl rounded-md hover:bg-blue-500'> Get Started Free</div>
            </Link>
            <Link href={'/SignIn'}>
               <div className='bg-white hover:bg-blue-100  sm:w-56 sm:h-14 sm:text-2xl  flex text-shadow-black font-se w-full justify-center h-10 items-center text-xl rounded-md font-semibold'> Sign In</div>
            </Link>
         </div>
         <div>
            <CardDetails />
         </div>
      </div>
   )
}

export default Content