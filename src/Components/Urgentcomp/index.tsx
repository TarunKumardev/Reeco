import React from 'react'
import { DialogFooter } from '../Ui/Dialog'
import { UseTable } from '../Table/Table.hooks'
import { Button } from '../Ui/Button'

function UrgentComp() {
    const {state , handleProduct } = UseTable()
    return (
    <div>
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

    </div>
  )
}

export default UrgentComp