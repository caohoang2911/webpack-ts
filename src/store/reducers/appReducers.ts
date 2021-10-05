import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { RootState } from 'store/storeConfig';
import counterReducer from './counterSlice';
import productsReducer from './productSlice';
import { counterTodoSlice, selectedTodoSlice, todosSlice } from './tesSlice';
import todosReducer from './todoSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['products', 'todos'],
};

const rootReducer: RootState = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  todosT: todosSlice.reducer,
  selectedTodo: selectedTodoSlice.reducer,
  counterT: counterTodoSlice.reducer,
  products: productsReducer,
});

const reducers = persistReducer(persistConfig, rootReducer);

export default reducers;
