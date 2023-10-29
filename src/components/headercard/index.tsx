import React from 'react'
import { Button } from '../Ui/button'

function HeaderCard() {
  return (
    <div className="bg-card">
    <div className="shadow-lg flex flex-col justify-around px-7 py-2">
      <div className="max-w-[1440px] mx-auto w-full">
        <h6 className="">
          Orders {">"} <span className="underline"> Orders904054 </span>{" "}
        </h6>
        <div className="flex justify-between items-center  ">
          <h1 className="text-2xl font-bold">Order 32457ABC</h1>
          <div className="pt-4">
            <Button variant={"outline"}>Back</Button>
            <Button variant="destructive">Aprrove Order</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeaderCard