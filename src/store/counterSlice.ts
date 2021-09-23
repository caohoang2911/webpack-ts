import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppThunk, RootState } from './storeConfig';

// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    extraReducers: (builder: any) => {
      alert(3);
      builder
        .addCase(incrementAsync.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(incrementAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.value += action.payload;
        });
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export const incrementIfOdd: any =
  (amount: number): AppThunk =>
  (dispatch: AppDispatch, getState: RootState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };
export const fecthCount = (amount: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(amount);
    }, 2000);
  });
};
export const incrementAsync: any = createAsyncThunk('counter/fetch', async (amount: number) => {
  console.log(fecthCount(amount));
  return fecthCount(amount);
});

export default counterSlice.reducer;
