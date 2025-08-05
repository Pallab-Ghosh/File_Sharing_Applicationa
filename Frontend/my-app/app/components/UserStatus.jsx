import { FileText, Shield, Users } from "lucide-react"

const UserStatus = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-blue-600 sm:justify-center items-center sm:gap-96 gap-7 sm:h-80 mt-12">
        <div className="flex flex-col gap-2  text-white font-bold justify-center items-center mt-10 sm:mt-0">
          <Users size={40} color="white"/>
          <p className="text-4xl">10k+</p>
          <p className="font-semibold text-xl">Active Users</p>
        </div>

      <div className="flex flex-col gap-2  text-white font-bold justify-center items-center">
             <FileText size={40} color="white" />
              <p className="text-4xl">100k+</p>
              <p className="font-semibold text-xl">Documents Shared</p>
        </div>
          <div className="flex flex-col gap-2  text-white font-bold justify-center items-center mb-10 sm:mb-0">
            <Shield size={40} color="white"/>
             <p className="text-4xl">99.9%</p>
             <p className="font-semibold text-xl">Uptime</p>
        </div>
    </div>
  )
}

export default UserStatus
