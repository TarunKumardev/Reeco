/* eslint-disable @typescript-eslint/ban-ts-comment */
import Header from "./components/ui/navbar";
import ProductTable from "./components/table/index";
import HeaderCard from "./components/headercard/index";
import DetailsCard from "./components/detailscard/index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./store/slices/foodSlice";

function App() {
   const dispatch = useDispatch()   
   useEffect(() => {
  //@ts-ignore
  dispatch(fetchData())
  }, [])
  return (
    <>
      <Header />
       <HeaderCard/>
      <div className="product__list__container h-[76vh] overflow-y-auto mt-2">
        <DetailsCard/>
        <div
          className="max-w-screen-xl mx-auto border  mt-4"
          style={{ borderRadius: "20px" }}
        >
          <ProductTable />
        </div>
      </div>
    </>
  );
}

export default App;
