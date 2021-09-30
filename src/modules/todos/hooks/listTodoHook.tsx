import { deletedTodo, removeTodo, restore, todoReceived, todoSelector } from '@reducers/todoSlice';
import { useAppDispatch, useAppSelector } from 'modules/hook';
import { useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';

const todoInits = [
  { id: '34qV0zRDvxPZipUgCXP68', name: 'aa', complete: false },
  { id: 'I5iFJzpxeQ3DoW4fuqK1Y', name: 'asdfdsfdsfdsfd', complete: true },
  { id: 'cXnxG2vugDcBh6bQX7pMt', name: 'baaa', complete: true },
  { id: 'lUDGFgawuTTtFIEAPmv05', name: 'fsd', complete: false },
  { id: 'pEYADyvypPPztrJWOHVZK', name: 'aa', complete: false },
  { id: 'pEYADyvypPPztrJWOHVZT', name: 'as', complete: false },
];

export const useTodoList = () => {
  const dispatch = useAppDispatch();
  const [state, setstate] = useState<Array<any> | undefined>(undefined);

  let lstTodo: any = useAppSelector(todoSelector.selectAll, shallowEqual);

  const [todos, setTodos] = useState<any>([]);
  const totalTodo: number = useAppSelector(todoSelector.selectTotal);
  const lstDeleted: Array<any> = useAppSelector(deletedTodo);
  console.info('d');
  useEffect(() => {
    dispatch(todoReceived(todoInits));
  }, []);

  useEffect(() => {
    setTodos(lstTodo);
  }, [lstTodo]);

  const removeAllTodo = () => {
    dispatch(removeTodo(true));
  };

  const restoreToDo = (todo) => {
    dispatch(restore(todo));
  };

  const sortByName = async () => {
    let todoSorts: any = sortBy('complete_up', todos);
    setTodos([...todoSorts]);
  };

  function sortBy(sortkey: string, todos: [any]) {
    switch (sortkey) {
      case 'complete_up':
        return todos.sort((a, b) => Number(a.complete) - Number(b.complete));
      case 'complete_down':
        return todos.sort((a, b) => Number(b.complete) - Number(a.complete));
    }
  }

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

  return [todos, totalTodo, widgetDeleted, removeAllTodo, sortByName];
};
