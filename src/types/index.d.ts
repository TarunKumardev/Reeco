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
      data: Idata ,
      productname : string
      type : string
    }
    fetcheddata : {
      data : []
      loading : string ,
      error : string | undefined
    }
}