import { useAppDispatch, useAppSelector } from 'store/hook';
import {
  deletedTodo,
  deleteTodo,
  removeAll,
  restore,
  todoSelector,
  updateTodo,
} from 'store/todoSlice';
import Todo from './Todo';

export const useTodo = (id, complete) => {
  const dispatch = useAppDispatch();

  const onDelete = () => {
    dispatch(deleteTodo(id));
  };

  const toggleTodo = () => {
    dispatch(
      updateTodo({
        id: id,
        changes: { complete: !complete },
      })
    );
  };
  return [onDelete, toggleTodo];
};

export const useTodoList = () => {
  const dispatch = useAppDispatch();

  const allTodo: any = useAppSelector(todoSelector.selectEntities);
  const totalTodo: number = useAppSelector(todoSelector.selectTotal);
  const lstDeleted: Array<any> = useAppSelector(deletedTodo);

  const todoList: any = [];
  for (const id in allTodo) {
    if (Object.hasOwnProperty.call(allTodo, id)) {
      const todoItem = allTodo[id];
      todoList.push(<Todo key={id} {...todoItem} />);
    }
  }
  const removeAllTodo = () => {
    dispatch(removeAll());
  };

  const restoreToDo = (todo) => {
    dispatch(restore(todo));
  };

  const widgetDeleted = lstDeleted.map((todo) => {
    return (
      <div key={todo.id}>
        <span style={{ textDecoration: todo.complete && 'line-through' }}>{todo.name}</span>
        <button
          onClick={() => {
            restoreToDo(todo);
          }}
        >
          Restore
        </button>
      </div>
    );
  });

  return [todoList, totalTodo, widgetDeleted, removeAllTodo];
};
