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

const  DialogContents =({type})=> {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button variant="outline">
            {type == 'feedback' && 'feedback'}
             {type == 'Contact us' && 'Contact us'}
            </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <button variant="outline">Cancel</button>
            </DialogClose>
            <button type="submit">Save changes</button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default DialogContents