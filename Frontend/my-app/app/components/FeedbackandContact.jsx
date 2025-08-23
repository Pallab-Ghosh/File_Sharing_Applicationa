import Link from "next/link"

const FeedbackandContact = () => {
   return (

      <div className="flex mt-5 sm:gap-3 p-1 justify-between sm:mr-5 ml-2">
         <Link href={'/SignUp'}>
            <div className='bg-white flex text-shadow-black font-semibold w-28 sm:w-32 sm:text-xl sm:h-14 justify-center h-8 items-center text-xl rounded-md hover:bg-blue-100 '> Feedback</div>
         </Link>
         <Link href={'/SignIn'}>
            <div className='bg-blue-600  hover:bg-blue-800 text-white  sm:w-32 sm:h-14 sm:text-xl  flex text-shadow-black  w-28 justify-center h-8 items-center text-xl rounded-sm '> Contact us</div>
         </Link>
      </div>

   )
}

export default FeedbackandContact
