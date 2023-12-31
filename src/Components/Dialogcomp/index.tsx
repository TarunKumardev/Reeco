import {
  Dialog,
  DialogContent,
} from "@/Components/Ui/Dialog"
import { RootState } from "@/store";
import { togglemodalData } from "@/store/slices/foodSlice";
import { ReactNode } from "react"
import { useDispatch, useSelector } from "react-redux";


export function ProductDialog({ children  } : {children : ReactNode } ) {
  const fakedata = useSelector((data : RootState ) => data.productList.modalstate )
  const dispatch = useDispatch()  
  return (
    <Dialog   open = {fakedata.isTriggered} 
    onOpenChange = {() => {
      dispatch(togglemodalData(""))
    }}
 
    >
      <DialogContent className="sm:max-w-[525px]">
          {children}

      </DialogContent>
    </Dialog>
  )
}
