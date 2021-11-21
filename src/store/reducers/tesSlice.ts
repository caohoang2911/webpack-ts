import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v1 as uuid } from 'uuid';
export interface Todo {
  id: string;
  desc: string;
  isComplete: boolean;
}

export interface State {
  todos: Todo[];
  selectedTodo: string | null;
  counter: number;
}

const initTodos: Todo[] = [
  {
    id: uuid(),
    desc: 'Learn React',
    isComplete: true,
  },
  {
    id: uuid(),
    desc: 'Learn Redux',
    isComplete: true,
  },
  {
    id: uuid(),
    desc: 'Learn Redux-ToolKit',
    isComplete: false,
  },
];

export const todosSlice: any = createSlice({
  name: 'todos',
  initialState: initTodos,
  reducers: {
    create: {
      reducer: (
        state,
        { payload }: PayloadAction<{ id: string; desc: string; isComplete: boolean }>
      ) => {
        state.push(payload);
      },
      prepare: ({ desc }: { desc: string }) => ({
        payload: {
          id: uuid(),
          desc: desc,
          isComplete: false,
        },
      }),
    },
    edit: (state, { payload }: PayloadAction<{ id: string; desc: string }>) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      if (index != -1) {
        state[index].desc = payload.desc;
      }
    },
    remove: (state, { payload }: PayloadAction<{ id: string }>) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      if (index != -1) {
        state.splice(index, 1);
      }
    },
    toggle: (state, { payload }: PayloadAction<{ id: string }>) => {
      console.log(state, 'okkk');
      const index = state.findIndex((todo) => todo.id === payload.id);

      if (index != -1) {
        state[index].isComplete = !state[index].isComplete;
      }
    },
  },
});

export const { create, edit, toggle, remove } = todosSlice.actions;

export const selectedTodoSlice = createSlice({
  name: 'selectTodo',
  initialState: null as string | null,
  reducers: {
    select: (state, { payload }: PayloadAction<{ id: string }>) => payload.id,
  },
});

export const { select } = selectedTodoSlice.actions;

export const counterTodoSlice: any = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {},
  extraReducers: {
    [todosSlice.actions.create.type]: (state) => {
      return state + 1;
    },
    [todosSlice.actions.remove.type]: (state) => state + 1,
    [todosSlice.actions.edit.type]: (state) => state + 1,
    [todosSlice.actions.toggle.type]: (state) => state + 1,
  },
});
// export const todoTReducer = combineReducers({
//   todos: todosSlice.reducer,
//   selectedTodo: selectedTodoSlice.reducer,
//   counter: counterTodoSlice.reducer,
// });
// const preloadedState = {
//   todos: [
//     {
//       text: 'Eat food',
//       completed: true,
//     },
//     {
//       text: 'Exercise',
//       completed: false,
//     },
//   ],
//   visibilityFilter: 'SHOW_COMPLETED',
// };
