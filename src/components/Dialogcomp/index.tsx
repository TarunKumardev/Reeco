import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { RootState } from "@/store";
import { togglemodalData } from "@/store/slices/foodSlice";
import { ReactNode } from "react"
import { useDispatch, useSelector } from "react-redux";


export function ProductDialog({ children  } : {children : ReactNode } ) {
  const fakedata = useSelector((data : RootState ) => data.productList.modalstate )
  const dispatch = useDispatch()  
  return (
    <Dialog open = {fakedata.isTriggered} 
    onOpenChange = {() => {
      dispatch(togglemodalData(""))
    }}>
      <DialogContent className="sm:max-w-[425px]">
          {children}

      </DialogContent>
    </Dialog>
  )
}
