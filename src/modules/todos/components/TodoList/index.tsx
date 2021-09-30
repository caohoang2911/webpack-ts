import { useTodoList } from 'modules/todos/hooks/listTodoHook';
import Todo from '../Todo';
import { useEffect } from 'react';

export default function TodoList() {
  const [todos, totalTodo, widgetDeleted, removeAllTodo, sortByName, isSort] = useTodoList();
  return (
    <div>
      <button
        onClick={() => {
          sortByName();
        }}
      >
        Sort Todo
      </button>
      <h3>Todo cout:{totalTodo}</h3>
      <button onClick={() => removeAllTodo()}>Remove all</button>
      <div className="listTodo">
        {todos.map((todoItem, index) => (
          <Todo key={todoItem.id} {...todoItem} />
        ))}
      </div>
      <hr />
      <div className="list-restore">{widgetDeleted}</div>
    </div>
  );
}
