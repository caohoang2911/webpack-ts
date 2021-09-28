import { useTodoList } from '../hook';

export default function TodoList() {
  const [todoList, totalTodo, widgetDeleted, removeAllTodo] = useTodoList();
  return (
    <div>
      <h3>Todo cout:{totalTodo}</h3>
      <button onClick={() => removeAllTodo()}>Remove all</button>
      <div className="listTodo">{todoList.length > 0 ? todoList : 'empty item'}</div>
      <hr />
      <div className="list-restore">{widgetDeleted}</div>
    </div>
  );
}
