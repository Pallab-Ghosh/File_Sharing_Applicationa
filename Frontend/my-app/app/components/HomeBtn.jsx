'use client'

import { useRouter } from "next/navigation"


const HomeBtn = () => {
  const router = useRouter()
  return (
    <div className="flex justify-center mt-10">
      <button
        className="h-12 bg-blue-700 w-52 rounded-lg text-white sm:text-2xl sm:w-60 font-bold"
        onClick={() => router.push('/')}//TODO[:as of now go to home page later go on dashboard page]
      >
        Start Free Today
      </button>
    </div>
  )
}

export default HomeBtn
