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

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
             {title}
              </DialogTitle>
            <DialogDescription>
             {desc}
            </DialogDescription>
          </DialogHeader>

          <div>
              {
                type =='feedback' && <FeedBackForm/> ||
                type =='contact' && <ContactForm/>
              }
          </div>

        </DialogContent>
      </form>
    </Dialog>
  )
}

export default DialogContents