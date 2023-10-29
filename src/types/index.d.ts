export interface Idata {
    productname: string;
    brand: string;
    price: number;
    quantity: number;
    total: number;
  }
  

  export interface CounterState {
    value: Idata[],
    modalstate : {
      isTriggered: boolean,
      data: Idata | object,
      productname : string
    }
    fetcheddata : {
      data : []
      loading : string ,
      error : string | undefined
    }
}