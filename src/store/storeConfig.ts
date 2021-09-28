import { Action, configureStore, EnhancedStore, ThunkAction } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import todosReducer from './todoSlice';
import productsReducer from './productSlice';
import logger from 'redux-logger';
export const store: EnhancedStore = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
