import { createEntityAdapter, createSlice, current } from '@reduxjs/toolkit';
import { RootState } from './storeConfig';

export const todoAdapter = createEntityAdapter();
export const todoSelector = todoAdapter.getSelectors((state: RootState) => state.todos);
const todoSlice = createSlice({
  name: 'todos',
  initialState: todoAdapter.getInitialState({
    todoDeleted: [],
  }),
  reducers: {
    addTodo: todoAdapter.addOne,
    addTodos: todoAdapter.addMany,
    deleteTodo(state: RootState, action) {
      console.log(current(state));
      state.todoDeleted.push(state.entities[action.payload]);
      todoAdapter.removeOne(state, action);
    },
    updateTodo: todoAdapter.updateOne,
    removeAll: todoAdapter.removeAll,
    restore(state, action) {
      todoAdapter.addOne(state, action);
      state.todoDeleted = state.todoDeleted.filter((todo: any) => {
        return todo.id !== action.payload.id;
      });
    },
  },
});
export const { addTodo, addTodos, deleteTodo, updateTodo, removeAll, restore } = todoSlice.actions;

export const deletedTodo = (state: RootState) => state.todos.todoDeleted;

export default todoSlice.reducer;
