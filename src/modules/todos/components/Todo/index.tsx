import { useTodo } from 'modules/todos/hooks/todoHook';

export default function Todo({ name, complete, id }: any) {
  const [onDelete, toggleTodo] = useTodo(id, complete);
  return (
    <div style={{ display: 'flex' }}>
      <input checked={complete} type="checkbox" onChange={toggleTodo} />
      <span style={{ textDecoration: complete && 'line-through' }}>{name}</span>
      <button onClick={onDelete}>X</button>
    </div>
  );
}
