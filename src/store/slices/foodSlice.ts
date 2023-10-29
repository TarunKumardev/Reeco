import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CounterState, Idata } from '@/types';

const initialState: CounterState = {
  value: [],
  modalstate: {
    isTriggered: false,
    data: {} as Idata,
    productname: '',
  },
  fetcheddata : {
    data: [],
    loading: 'idle',
    error: undefined,
  }
};
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await fetch('https://api.jsonbin.io/v3/b/653e7d8d0574da7622bf4bbc', {
    headers: {
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  console.log(data);
  
  return data.record;
});

const counterSlice = createSlice({
  name: 'productlist', // Corrected the typo here ('prroductlist' to 'productlist')
  initialState,
  reducers: {
    updateproductData: (state, { payload }) => {
      const productName = state.modalstate.productname || payload.productname;

      state.value = state.value.map((item) =>
        item.productname === productName
          ? { ...item, badge: payload.type }
          : item
      );
    },
    togglemodalData: (state, { payload }) => {
      const updatedData = state.value.find(
        (item) => item.productname === payload
      );

      state.modalstate = {
        ...state.modalstate,
        isTriggered: !state.modalstate.isTriggered,
        data: updatedData || {},
        productname: payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.fetcheddata.loading = 'pending';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.fetcheddata.loading = 'idle';
        state.value = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.fetcheddata.loading = 'idle';
        state.fetcheddata.error = action.error.message;
      });
  },
});

export const { updateproductData, togglemodalData } = counterSlice.actions;

export default counterSlice.reducer;
