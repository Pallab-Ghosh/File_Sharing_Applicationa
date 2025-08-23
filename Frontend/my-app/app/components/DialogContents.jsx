"use client"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Label } from "@/components/ui/label"
import FeedBackForm from "./FeedBackForm"
import ContactForm from "./ContactForm"

const  DialogContents =({formprops : {type , BtnContent,title,desc}})=> {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button variant="outline">
            {BtnContent} 
            </button>
        </DialogTrigger>

        <DialogContent className="sm:w-lg">
          <DialogHeader>
            <DialogTitle>
             {title}
              </DialogTitle>
            <DialogDescription>
             {desc}
            </DialogDescription>
          </DialogHeader>

          <div>
               { type =='feedback' && <FeedBackForm/> }
                {type =='contact' && <ContactForm/>}
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <button className='w-full bg-blue-600 hover:bg-blue-700 h-14 text-white rounded-lg' variant="outline">Close</button>
            </DialogClose>
          </DialogFooter>

        </DialogContent>
      </form>
    </Dialog>
  )
}

export default DialogContents