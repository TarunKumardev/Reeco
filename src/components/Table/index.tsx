import { Table, TableBody, TableCell, TableRow } from "../Ui/Table";
import { Button } from "../Ui/Button";
import ProductTableHeader from "./TableHeader";
import { Idata } from "@/types";
import { ProductDialog } from "../Dialogcomp";
import { Badge } from "@/components/Ui/Badge";
import { DialogFooter } from "../Ui/Dialog";
import { Input } from "../Ui/Input";
import { UseTable } from "./Table.hooks";
const imageURL = "https://imgdb.net/storage/uploads/8d5b47b73cfe6b8eda47830b0294ff94f972a12173cd1f94eb2e0b3766071659.jpg";


export default function ProductTable() {
   const {state , updateProductBadge, openProductDialog,     handleProduct}   = UseTable()
 
  
  return (
    <>
      <ProductDialog>
        <h1>Missing Product</h1>
        <h2>Is '{state.modalstate.productname}' urgent</h2>
        <DialogFooter>
          <Button type="submit" onClick={() => handleProduct("not urgent")}>
            No
          </Button>
          <Button type="submit" onClick={() => handleProduct("urgent")}>
            Yes
          </Button>
        </DialogFooter>
      </ProductDialog>

      <div className="h-auto">
        <div className="flex justify-between p-5 ">
          <div className="">
            <Input
              className="w-[400px] border border-[lightgray] text-slate-500"
              style={{ borderRadius: "100px" }}
              placeholder="Search...."
            />
          </div>
          <div className="flex gap-6">
            <Button
              className="border border-green-800 text-green-800"
              style={{ borderRadius: "50px" }}
            >
              Add item
            </Button>
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 18V15H8V18M16 18V21H8V18M16 18H20V9H16M8 18H4V9H8M8 9H16M8 9V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V9"
                stroke="#166534"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <Table>
          <ProductTableHeader />
          <TableBody>
            {state.value.map((value: Idata) => (
              <ProductTableRow
                badge=""
                key={value.productname}
                updateBadge={updateProductBadge}
                openDialog={openProductDialog}
                {...value}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

function ProductTableRow({
  productname,
  brand,
  quantity,
  price,
  badge,
  updateBadge,
  openDialog,
}: Idata & {
  badge :string
  updateBadge: (name : string , type : string) => void;
  openDialog: (data : string) => void;
}) {
  const VariantBadge = () => (
    <Badge variant={badge === "Approved" ? "outline" : "destructive"}>
      {badge}
    </Badge>
  );

  return (
    <TableRow>
      <TableCell className="font-medium">
        <img
          src={imageURL}
          className="w-[68px] h-[68px] "
          loading="eager"
          alt={productname}
        />
      </TableCell>
      <TableCell>{productname}</TableCell>
      <TableCell>{brand}</TableCell>
      <TableCell>{quantity}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell className="">{badge ? <VariantBadge /> : null} </TableCell>
      <TableCell className="">
        <div className="flex items-center justify-between">
          <div className="" style={{ textAlign: "end" }}>
            <Button onClick={() => updateBadge(productname, "Approved")}>
              Yes
            </Button>
            <Button onClick={() => openDialog(productname)}>Remove</Button>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}
