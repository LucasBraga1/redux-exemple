import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmout, decrementByAmout} from '../context/counterSlice';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmout = () => {
    dispatch(incrementByAmout(5));
  };

  const handleDecrementByAmout = () => {
    dispatch(decrementByAmout(5));
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrementByAmout}>Increment By Amout</button>
      <button onClick={handleDecrementByAmout}>Decrement By Amout</button>
    </div>
  );
};

export default Counter;
