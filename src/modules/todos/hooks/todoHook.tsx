// import { deleteTodo, updateTodo } from '@reducers/todoSlice';
import { deleteTodo, updateTodo } from '@reducers/todoSlice';
import { useAppDispatch } from 'modules/hook';

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
