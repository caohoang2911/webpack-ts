import React from 'react';
import { useTodo } from '../hook';

export default function Todo({ name, complete, id }) {
  const [onDelete, toggleTodo] = useTodo(id, complete);
  return (
    <div style={{ display: 'flex' }}>
      <input type="checkbox" onChange={toggleTodo} />
      <span style={{ textDecoration: complete && 'line-through' }}>{name}</span>
      <button onClick={onDelete}>X</button>
    </div>
  );
}
