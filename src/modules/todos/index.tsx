import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

export default function TodoApp() {
  return (
    <div>
      <h3>Add your todo</h3>

      <AddTodo />
      <TodoList />
    </div>
  );
}
