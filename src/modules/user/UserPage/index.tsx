import { useReducer, useEffect } from 'react';
import _ from 'lodash';
function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}
const booksArray = [
  { title: 'First', pages: 400 },
  { title: 'Second', pages: 100 },
  { title: 'Third', pages: 300 },
];

const User = (): JSX.Element => {
  const initialCount = 3;

  useEffect(() => {
    const temp = _.find(booksArray, function (book) {
      return book.pages > 150;
    });
    console.log(temp, 'temp');
  }, []);
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      {console.log('render')}
      <input defaultValue="1000" />
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>Reset</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      {booksArray.map((book) => (
        <h3>{book.title}</h3>
      ))}
    </>
  );
};
export default User;
