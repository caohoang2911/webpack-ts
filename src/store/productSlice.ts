import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productApi } from './../api/productApi';
export const getAsyncProduct: any = createAsyncThunk('counter/getAsyncProduct', async () => {
  const resonpse: any = await productApi.getProduct({});
  return resonpse;
});

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getAsyncProduct.pending]: (state, action) => {
      console.log('pending');
    },
    [getAsyncProduct.rejected]: (state, action) => {
      console.log('rejected');
    },
    [getAsyncProduct.fulfilled]: (state, action) => {
      console.log('fulfilled');
    },
  },
});

export default productSlice.reducer;
