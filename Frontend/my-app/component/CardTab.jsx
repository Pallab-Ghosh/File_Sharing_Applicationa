import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Upload } from "lucide-react"

const CardTab = () => {
  return (
     <div>
      <Card className="flex justify-center bg-amber-100">
            <CardDescription className="flex justify-center">
                <Upload size={100}/>
            </CardDescription>
            <CardContent>
              <p>Easy Upload</p>
            </CardContent>
          <CardFooter>
              <p>Drag and drop or click to upload documents.</p>
               <p>Support for multiple file formats.</p> 
                
          </CardFooter>
         </Card>
     </div>
  )
}

export default CardTab
