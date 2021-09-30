import { unwrapResult } from '@reduxjs/toolkit';
import pumkin from 'assets/icons/pumkin.svg';
import { useState } from 'react';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
} from '@reducers/counterSlice';
import { useAppDispatch, useAppSelector } from 'modules/hook';
import styles from './home.module.css';
const HomePage = () => {
  const dispatch = useAppDispatch();
  let toto;
  toto = toto || 'default value';
  const count = useAppSelector(selectCount);

  const [incrementAmount, setIncrementAmount] = useState('1');
  const incrementValue = Number(incrementAmount) || 0;

  const asyncClick = async () => {
    try {
      const data = await dispatch(incrementAsync(incrementValue));
      const result = unwrapResult(data);
    } catch (err: any) {
      console.log('Handle error ' + err.message);
    }
  };

  return (
    <div className="wrapper">
      {console.log(toto, 'toto')}
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
        <button className="button" onClick={asyncClick}>
          Add Async
        </button>
        <button className="button" onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </button>
      </div>
    </div>
  );
};
export default HomePage;
