import { RootState } from "@/store"
import { togglemodalData, updateproductData } from "@/store/slices/foodSlice"
import { useDispatch, useSelector } from "react-redux"

export function UseTable(){
    const state = useSelector((data : RootState ) => data.productList )  
    const dispatch = useDispatch()

    function updateProductBadge(productname: string) {
        dispatch(updateproductData({productname , type:"Approved"}))
      }
     
      function openProductDialog(productname: string) {    
        dispatch(togglemodalData(productname))
      }
      
      function handleProduct(varianttype: string) {
        dispatch(updateproductData({  type : varianttype  }))
        dispatch(togglemodalData(""))
      }

      return {
        state ,
        updateProductBadge,
        openProductDialog,
        handleProduct
      }
}