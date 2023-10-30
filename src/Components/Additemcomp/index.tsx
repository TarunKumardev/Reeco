import  { useState } from 'react'
import { Label } from '../Ui/Label';
import { useDispatch, useSelector } from 'react-redux';
import { DialogFooter } from '../Ui/Dialog';
import { Button } from '../Ui/Button';
import { RootState } from '@/store';
import { EditProduct, toggleEditmodal } from '@/store/slices/foodSlice';
const imageURL = "https://imgdb.net/storage/uploads/8d5b47b73cfe6b8eda47830b0294ff94f972a12173cd1f94eb2e0b3766071659.jpg";

function Edititemcomp() {
    const state = useSelector((state: RootState) => state.productList.modalstate)
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(() => {
        return {
            price: state.data.price,
            quantity: state.data.quantity,
            total: state.data.price *  state.data.quantity
        }
    })

    const handleEdit = (key: string, action: string) => {
        setEdit((prevState) => {
            if (key === 'quantity') {
                    const newQuantity = action === 'increment' ? prevState[key] + 1 : prevState[key] - 1;
                const newTotal = newQuantity * prevState.price;
                return { ...prevState, [key]: newQuantity, total: newTotal };
            }
            return prevState;
        });
    };

    return (
        <div className='w-[500px]' >
            <h2 className='pt-4' >{state?.data?.productname}</h2>
            <h3>{state?.data?.brand}</h3>
            <div className="flex w-full justify-between ">
                <div>
                    <img
                        src={imageURL}
                        className="w-[200px] h-[200px] "
                        loading="eager"
                    />
                </div>

                <div className="pr-10">
  {Object.keys(edit).map((key) => {
    console.log(key, "key");

    return (
      <div className="flex items-center mb-4" key={key}>
        <Label htmlFor={key} className="">
          {key}
        </Label>
        {key === 'quantity' ? (
          <>
            <Button onClick={() => handleEdit(key, 'increment')}>+</Button>
            <div>
              <h3>{edit[key]}</h3>
            </div>
            <Button onClick={() => handleEdit(key, 'decrement')}>-</Button>
          </>
        ) : (
          <div>
            <h3 className='pl-14' >{edit[key]}</h3>
          </div>
        )}
      </div>
    );
  })}
</div>



            </div>


            <DialogFooter>
                <Button type="submit" onClick={() =>dispatch(toggleEditmodal(""))} >
                    Cancel
                </Button>
                <Button type="submit"   onClick={() =>dispatch(EditProduct(edit.quantity))}>
                    Send
                </Button>
            </DialogFooter>
        </div>
    )
}

export default Edititemcomp