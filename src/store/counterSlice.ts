import {
  AnyAction,
  createAsyncThunk,
  unwrapResult,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { AppDispatch, AppThunk, RootState } from './storeConfig';

// Define a type for the slice state
interface CounterState {
  value: number;
  state: string;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  state: 'idle',
};

export const fetchCount = (amount: number) => {
  return new Promise((resolve, reject) => {
    reject(new Error('404 error'));
    return;
    setTimeout(() => {
      resolve({ data: amount });
    }, 2000);
  });
};
export const incrementAsync: any = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const resonpse: any = await fetchCount(amount);
    incrementByAmount(resonpse.data);
    return resonpse.data;
  }
);
function isActionWithNumberPayload(action: AnyAction): action is PayloadAction<number> {
  return typeof action.payload === 'number';
}

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
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        console.log(1);
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(2);
        state.value += action.payload;
      })
      .addMatcher(isActionWithNumberPayload, (state, action) => {
        console.log(action, 'action');
      });
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

export default counterSlice.reducer;
