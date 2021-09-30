import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodos } from 'store/reducers/todoSlice';

export default function AddTodo() {
  const [text, setTodo] = useState('');
  const dispatch = useDispatch();

  const submitTodo = () => {
    if (text.length > 0) {
      dispatch(addTodos(text.split(',').map((t) => ({ id: nanoid(), name: t, complete: false }))));
    }
  };
  return (
    <div className="add-todo">
      <input
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={submitTodo}>Add todo</button>
    </div>
  );
}
