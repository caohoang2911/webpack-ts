import todosReducer, { todoAdapter, addTodos } from './todoSlice';

describe('counter reducer', () => {
  const initialState = todoAdapter.getInitialState({
    todoDeleted: [],
    sortBy: '',
  });
  it('Check node', () => {
    expect(getByTestId('button')).toBeDisabled();
  });
  it('Todos length add one items', () => {
    const add = todosReducer(initialState, addTodos([{ id: '3', name: 'ok', complete: false }]));
    expect(add.ids.length).toEqual(1);
    expect(Object.keys(add.entities).length).toEqual(1);
  });
  it('Todos length not changes', () => {
    const add = todosReducer(initialState, addTodos([{ id: '3', complete: false }]));
    console.log(add);
    expect(Object.keys(add.entities).length).toEqual(1);
  });
});
