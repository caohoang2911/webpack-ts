import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productApi } from '../../api/productApi';
import { RootState } from '../storeConfig';
export const getAsyncProduct: any = createAsyncThunk(
  'counter/getAsyncProduct',
  async (param: any, thunkAPI: any) => {
    const resonpse: any = await productApi.getProduct({ ...param });
    return resonpse;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    values: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: {
    [getAsyncProduct.pending]: (state, action) => {
      state.status = 'idle';
    },
    [getAsyncProduct.rejected]: (state, action) => {
      state.status = 'fulfilled';
    },
    [getAsyncProduct.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.values = action.payload;
    },
  },
});

export const {} = productSlice.actions;

export const allProduct = (state: RootState) => state.products.values;

export default productSlice.reducer;
