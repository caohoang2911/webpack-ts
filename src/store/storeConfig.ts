import {
  Action,
  combineReducers,
  configureStore,
  EnhancedStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import todosReducer from './todoSlice';
import productsReducer from './productSlice';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  blacklist: ['counter'],
};

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['products'],
};

const rootReducer: any = combineReducers({
  counter: counterReducer,
  todos: persistReducer(authPersistConfig, todosReducer),
  products: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: EnhancedStore = configureStore({
  reducer: persistedReducer,
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
