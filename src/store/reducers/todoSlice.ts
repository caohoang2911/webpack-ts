import {
  createDraftSafeSelector,
  createEntityAdapter,
  createSelector,
  createSlice,
  current,
  EntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from 'store/storeConfig';

export interface Todo {
  id: string;
  name: string;
  complete: boolean;
}

function sortTodobyName(a, b) {
  return Number(a.complete) - Number(b.complete);
}

export const todoAdapter = createEntityAdapter<Todo>({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const todoSelector = todoAdapter.getSelectors((state: RootState) => state.todos);

const todoSlice = createSlice({
  name: 'todos',
  initialState: todoAdapter.getInitialState({
    todoDeleted: [],
    sortBy: 'complete',
  }),
  reducers: {
    sortTodo: (state: RootState, action: PayloadAction<any>) => {
      const { sortBy, todoSort } = action.payload;
      state = todoSort;
    },
    addTodo(state: RootState, action) {
      todoAdapter.addOne(state, action);
    },
    addTodos(state: RootState, action) {
      todoAdapter.addMany(state, action);
    },
    deleteTodo(state: RootState, action) {
      state.todoDeleted.push(state.entities[action.payload]);
      todoAdapter.removeOne(state, action);
    },
    updateTodo(state: RootState, action) {
      todoAdapter.updateOne(state, action);
    },
    removeTodo(state: RootState, action) {
      todoAdapter.removeAll(state);
    },
    restore(state, action) {
      todoAdapter.addOne(state, action);
      state.todoDeleted = state.todoDeleted.filter((todo: any) => {
        return todo.id !== action.payload.id;
      });
    },
    todoReceived(state, action) {
      todoAdapter.setAll(state, action.payload);
    },
  },
  extraReducers: (builder) => {},
});
export const {
  addTodo,
  addTodos,
  deleteTodo,
  updateTodo,
  removeTodo,
  restore,
  todoReceived,
  sortTodo,
} = todoSlice.actions;

export const deletedTodo = (state: RootState) => state.todos.todoDeleted;

const todoEntities = (state: RootState) => state;

const allTodoSelector = createDraftSafeSelector(todoEntities, (items) => {
  return Object.values(items);
});

export default todoSlice.reducer;
