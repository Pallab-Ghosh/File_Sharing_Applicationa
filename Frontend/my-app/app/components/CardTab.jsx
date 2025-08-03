
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { MessageCircle, Share2, Upload } from "lucide-react"

const CardTab = () => {
  return (
     <div className="w-screen flex flex-col items-center gap-7 sm:flex-row sm:justify-center">
      <Card className=" bg-stone-50 w-96 sm:w-lg  rounded-lg">
            <CardDescription className="flex justify-center flex-col items-center gap-8 text-xl font-bold text-black">
                <Upload size={50} color="blue"/>
                <p className="sm:text-2xl">Easy Upload</p>
            </CardDescription>
 
             <CardFooter className="flex flex-col sm:text-xl text-center">
              <p>
                Drag and drop or click to upload documents.<br />
                Support for multiple file formats.
              </p>
   

          </CardFooter>
         </Card>

          <Card className=" bg-stone-50 w-96 sm:w-lg rounded-lg">
            <CardDescription className="flex justify-center flex-col items-center gap-8 text-xl font-bold text-black">
                <Share2 size={50} color="blue"/>
                <p className="sm:text-2xl">Secure Sharing</p>
            </CardDescription>
          <CardFooter className="flex flex-col sm:text-xl text-center">
              <p>Share Documents securely with team <br/>
               members and control access permission.</p> 
          </CardFooter>
         </Card>

          <Card className=" bg-stone-50 w-96 sm:w-lg  rounded-lg">
            <CardDescription className="flex justify-center flex-col items-center gap-8 text-xl font-bold text-black">
                <MessageCircle size={50} color="blue"/>
                <p className="sm:text-2xl">Real-time Comments</p>
            </CardDescription>
          <CardFooter className="flex flex-col sm:text-xl text-center">
              <p>Collaborate with comments and feedback.<br/>
               on shared documents in real-time.</p> 
          </CardFooter>
         </Card>
     </div>
  )
}

export default CardTab