import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
} from 'store/counterSlice';
import styles from './home.module.css';
import { useAppDispatch, useAppSelector } from 'store/hook';
import { useState, useEffect } from 'react';
import pumkin from 'assets/icons/pumkin.svg';

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  const [incrementAmount, setIncrementAmount] = useState('1');
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className="wrappeddr">
      <img src={pumkin} />
      <div>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
      </div>
      <div className="action">
        <input
          onChange={(e) => {
            setIncrementAmount(e.target.value);
          }}
        />
        <button className={styles.abc} onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
        <button className="button" onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </button>
        <button className="button" onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </button>
      </div>
    </div>
  );
};
export default Counter;
